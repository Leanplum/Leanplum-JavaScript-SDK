import clevertap from 'clevertap-web-sdk'
import { CreateRequestFunction, MigrationState } from './types/internal'
import StorageManager from './StorageManager'
import Constants from './Constants'
import ArgsBuilder from './ArgsBuilder'

type MigrationStateResponse = {
  success: Boolean,
  sha256?: string,
  state?: string,
  sdk?: 'lp' | 'lp+ct' | 'ct'
}
type ApiResponse<T> = {
  response: Array<T>
}
type MigrationStateApiResponse = ApiResponse<MigrationStateResponse>
type MigrationStateLoadedCallback = (s: MigrationState) => any;

const noop = () => {}

const toMigrationState = (obj?: MigrationStateResponse): MigrationState => {
  switch (obj?.sdk) {
    case 'lp':
      return MigrationState.LEANPLUM;
    case 'lp+ct':
      return MigrationState.DUPLICATE;
    case 'ct':
      return MigrationState.CLEVERTAP;
    default:
      return MigrationState.UNKNOWN;
  }
}

export default class MigrationManager {
  private response: any = null

  constructor(private createRequest: CreateRequestFunction) {
    const savedResponse = StorageManager.get(Constants.DEFAULT_KEYS.MIGRATION_STATE)

    if (savedResponse) {
      this.response = JSON.parse(savedResponse)
    }
  }

  public getState(callback: MigrationStateLoadedCallback = noop) {
    const response = this.response

    if (response && response.sdk !== MigrationState.UNKNOWN) {
      callback(response.sdk)
      return;
    }

    this.getMigrationState(callback)
  }

  public verifyState(sha: string) {
    if (this.response.sha256 !== sha) {
      this.getMigrationState(noop)
    }
  }

  public initCleverTap() {
    const config = this.response?.ct;
    if (!config) {
      return
    }
    clevertap.init(config.accountId, config.regionCode)
  }

  public duplicateRequest(action: string, args: ArgsBuilder, options: any) {
    const state = toMigrationState(this.response)

    if (state === MigrationState.DUPLICATE) {
      args.add(Constants.PARAMS.CT, true)
    }

    return state === MigrationState.CLEVERTAP
  }

  private getMigrationState(callback: MigrationStateLoadedCallback) {
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
      }
    })
  }
}
