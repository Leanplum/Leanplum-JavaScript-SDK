import { CreateRequestFunction } from './types/internal'
import StorageManager from './StorageManager'
import Constants from './Constants'

export enum MigrationState {
  UNKNOWN = 'unknown',
  LEANPLUM = 'lp',
  DUPLICATE = 'lp+ct',
  CLEVERTAP = 'ct'
}

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
  private state = {
    state: MigrationState.UNKNOWN,
    sha256: ''
  }

  constructor(private createRequest: CreateRequestFunction) {
    const savedState = StorageManager.get(Constants.DEFAULT_KEYS.MIGRATION_STATE)

    if (savedState) {
      this.state = JSON.parse(savedState)
    }
  }

  public getState(): MigrationState {
    return this.state.state
  }

  fetchState() {
    this.createRequest('getMigrateState', null, {
      sendNow: true,
      response: (r: MigrationStateApiResponse) => {
        const response = r?.response?.[0]
        const state = toMigrationState(response)

        if (state !== MigrationState.UNKNOWN) {
          const sha256 = response?.sha256

          StorageManager.save(Constants.DEFAULT_KEYS.MIGRATION_STATE, JSON.stringify({
            state,
            sha256
          }))
        }
      }
    })
  }

}
