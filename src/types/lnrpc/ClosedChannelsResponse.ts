// Original file: protos/lightning.proto

import type { ChannelCloseSummaryPartial as _lnrpc_ChannelCloseSummaryPartial, ChannelCloseSummary as _lnrpc_ChannelCloseSummary } from '../lnrpc/ChannelCloseSummary';

export interface ClosedChannelsResponsePartial {
  'channels'?: (_lnrpc_ChannelCloseSummaryPartial)[];
}

export interface ClosedChannelsResponse {
  'channels': (_lnrpc_ChannelCloseSummary)[];
}
