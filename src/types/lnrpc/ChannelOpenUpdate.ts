// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';

export interface ChannelOpenUpdatePartial {
  'channelPoint'?: (_lnrpc_ChannelPointPartial | null);
}

export interface ChannelOpenUpdate {
  'channelPoint': (_lnrpc_ChannelPoint | null);
}
