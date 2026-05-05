// Original file: protos/lightning.proto

import type { ChannelPartial as _lnrpc_ChannelPartial, Channel as _lnrpc_Channel } from '../lnrpc/Channel';

export interface ChannelCommitUpdatePartial {
  'channel'?: (_lnrpc_ChannelPartial | null);
}

export interface ChannelCommitUpdate {
  'channel': (_lnrpc_Channel | null);
}
