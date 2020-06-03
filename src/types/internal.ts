import ArgsBuilder from '../ArgsBuilder'
import { LeanplumRequestOptions } from '../LeanplumRequest'
import { Action } from './public'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MessageVariables = any
export type Message = {
  messageId: string;
  vars: MessageVariables;
}

export type CreateRequestFunction = (
  action: string,
  args: ArgsBuilder,
  options: LeanplumRequestOptions
) => void

export type MessageObject = {
  deliveryTimestamp: number;
  isRead: boolean;
  messageData?: {
    action?: string;
    countdown?: number;
    hasImpressionCriteria?: boolean;
    parentCampaignId?: number;
    priority?: number;
    startTime?: number;
    vars?: {
      Title: string;
      Subtitle: string;
      Image: string;
      'Open action': Action;
    };
  };
}
