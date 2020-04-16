import ArgsBuilder from '../ArgsBuilder'
import { LeanplumRequestOptions } from '../LeanplumRequest'

export type CreateRequestFunction = (
  action: string,
  args: ArgsBuilder,
  options: LeanplumRequestOptions
) => void
