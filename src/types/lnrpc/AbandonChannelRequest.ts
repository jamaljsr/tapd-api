// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';

export interface AbandonChannelRequestPartial {
  'channelPoint'?: (_lnrpc_ChannelPointPartial | null);
  'pendingFundingShimOnly'?: (boolean);
  'iKnowWhatIAmDoing'?: (boolean);
}

export interface AbandonChannelRequest {
  'channelPoint': (_lnrpc_ChannelPoint | null);
  'pendingFundingShimOnly': (boolean);
  'iKnowWhatIAmDoing': (boolean);
}
