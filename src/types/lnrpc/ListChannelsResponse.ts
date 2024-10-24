// Original file: protos/lightning.proto

import type { ChannelPartial as _lnrpc_ChannelPartial, Channel as _lnrpc_Channel } from '../lnrpc/Channel';

export interface ListChannelsResponsePartial {
  'channels'?: (_lnrpc_ChannelPartial)[];
}

export interface ListChannelsResponse {
  'channels': (_lnrpc_Channel)[];
}
