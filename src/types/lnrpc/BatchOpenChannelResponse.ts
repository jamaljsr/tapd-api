// Original file: protos/lightning.proto

import type { PendingUpdatePartial as _lnrpc_PendingUpdatePartial, PendingUpdate as _lnrpc_PendingUpdate } from '../lnrpc/PendingUpdate';

export interface BatchOpenChannelResponsePartial {
  'pendingChannels'?: (_lnrpc_PendingUpdatePartial)[];
}

export interface BatchOpenChannelResponse {
  'pendingChannels': (_lnrpc_PendingUpdate)[];
}
