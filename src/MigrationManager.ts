import clevertap from 'clevertap-web-sdk'
import { CreateRequestFunction, MigrationState } from './types/internal'
import StorageManager from './StorageManager'
import Constants from './Constants'
import ArgsBuilder from './ArgsBuilder'

type Region = 'eu1' | 'in1' | 'sg1' | 'us1' | 'sk1';

type Attributes = Record<string, string>;

type RequestOptions = {
  isPurchase?: boolean;
}

type MigrationStateResponse = {
  success: boolean;
  sha256?: string;
  state?: string;
  sdk?: 'lp' | 'lp+ct' | 'ct';
  ct?: {
    accountId: string;
    regionCode: Region;
    token: string;
    attributeMappings?: { [key: string]: string };
  };
}
type ApiResponse<T> = {
  response: Array<T>;
}
type MigrationStateApiResponse = ApiResponse<MigrationStateResponse>
type MigrationStateLoadedCallback = (s: MigrationState) => void;

const noop = (): void => { /* noop */ }

const toMigrationState = (obj?: MigrationStateResponse): MigrationState => {
  switch (obj?.sdk) {
    case 'lp':
      return MigrationState.LEANPLUM
    case 'lp+ct':
      return MigrationState.DUPLICATE
    case 'ct':
      return MigrationState.CLEVERTAP
    default:
      return MigrationState.UNKNOWN
  }
}

export default class MigrationManager {
  private response: MigrationStateResponse | null = null

  constructor(private createRequest: CreateRequestFunction) {
    const savedResponse = StorageManager.get(Constants.DEFAULT_KEYS.MIGRATION_STATE)

    if (savedResponse) {
      this.response = JSON.parse(savedResponse)
    }
  }

  public getState(callback: MigrationStateLoadedCallback = noop): void {
    const response = this.response
    const state = toMigrationState(this.response)

    if (response && state !== MigrationState.UNKNOWN) {
      callback(state)
      return
    }

    this.getMigrationState(callback)
  }

  public verifyState(sha: string): void {
    if (this.response.sha256 !== sha) {
      this.getMigrationState(noop)
    }
  }

  public initCleverTap(): void {
    const config = this.response?.ct
    if (!config) {
      return
    }
    clevertap.init(config.accountId, config.regionCode)
  }

  public duplicateRequest(action: string, args: ArgsBuilder, options: RequestOptions): boolean {
    const state = toMigrationState(this.response)

    if (state === MigrationState.DUPLICATE) {
      args.add(Constants.PARAMS.CT, true)
    }

    const argsDict = args?.buildDict() || {}

    if (action === Constants.METHODS.TRACK) {
      this.eventPush(argsDict, options)
    } else if (action === Constants.METHODS.ADVANCE) {
      argsDict.event = `state_${argsDict.state}`
      this.eventPush(argsDict, options)
    } else if (action === Constants.METHODS.SET_USER_ATTRIBUTES) {
      this.profilePush(argsDict)
    }

    return state === MigrationState.CLEVERTAP
  }

  private profilePush(argsDict: Attributes): void {
    const userId = argsDict[Constants.PARAMS.NEW_USER_ID]
    const attrs =
      this.mapAttributes(
        this.convertArrays(
          JSON.parse(argsDict.userAttributes)
        )
      )

    if (userId) {
      Object.assign(attrs, { Identity: userId })
      clevertap.onUserLogin.push({ Site: attrs })
    } else {
      clevertap.profile.push(attrs)
    }
  }

  private eventPush(argsDict: Attributes, options: RequestOptions): void {
    // if action == start
    const isEngagementEvent = argsDict[Constants.PARAMS.MESSAGE_ID]
    const eventName = options.isPurchase ? 'Charged' : argsDict.event

    if (eventName && !isEngagementEvent) {
      const eventParams = {}

      if (argsDict.params) {
        const params = this.convertArrays(
          JSON.parse(argsDict.params)
        )

        Object.assign(eventParams, params)
      }

      if (argsDict.value) {
        Object.assign(eventParams, { value: argsDict.value })
      }

      if (argsDict.info) {
        Object.assign(eventParams, { info: argsDict.info })
      }

      if (options.isPurchase && argsDict.currencyCode) {
        Object.assign(eventParams, {
          currencyCode: argsDict.currencyCode,
        })
      }

      clevertap.event.push(eventName, eventParams)
    }
  }

  private convertArrays(obj: Attributes): Attributes {
    return Object.keys(obj).reduce((acc, key) => {
      if (Array.isArray(obj[key])) {
        const arr = obj[key] as never as Array<string>
        acc[key] = `[${arr.join(',')}]`
      } else {
        acc[key] = obj[key]
      }

      return acc
    }, {})
  }

  private mapAttributes(obj: Attributes): Attributes {
    const mapping = this.response.ct?.attributeMappings

    if (!mapping) return obj

    return Object.keys(obj).reduce((acc, key) => {
      if (mapping[key]) {
        acc[mapping[key]] = obj[key]
      } else {
        acc[key] = obj[key]
      }
      return acc
    }, {})
  }

  private getMigrationState(callback: MigrationStateLoadedCallback): void {
    this.createRequest('getMigrateState', null, {
      sendNow: true,
      response: (r: MigrationStateApiResponse) => {
        const response = r?.response?.[0]
        const state = toMigrationState(response)

        if (state && state !== MigrationState.UNKNOWN) {
          StorageManager.save(Constants.DEFAULT_KEYS.MIGRATION_STATE, JSON.stringify(response))

          this.response = response
        }

        callback(state)
      },
    })
  }
}
