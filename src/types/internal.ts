import ArgsBuilder from '../ArgsBuilder'
import { LeanplumRequestOptions } from '../LeanplumRequest'
import { Action } from './public'

export type MessageId = string

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
