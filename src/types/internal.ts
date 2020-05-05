import ArgsBuilder from '../ArgsBuilder'
import { LeanplumRequestOptions } from '../LeanplumRequest'

export type CreateRequestFunction = (
  action: string,
  args: ArgsBuilder,
  options: LeanplumRequestOptions
) => void

interface ChainMessage {
  __name__: 'Chain to Existing Message';
  'Chained message': string;
}

interface OpenURLAction {
  __name__: 'Open URL';
  URL: string;
}

export type Action = ChainMessage | OpenURLAction
