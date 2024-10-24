// Original file: protos/lightning.proto

import type { PendingUpdatePartial as _lnrpc_PendingUpdatePartial, PendingUpdate as _lnrpc_PendingUpdate } from '../lnrpc/PendingUpdate';
import type { ChannelCloseUpdatePartial as _lnrpc_ChannelCloseUpdatePartial, ChannelCloseUpdate as _lnrpc_ChannelCloseUpdate } from '../lnrpc/ChannelCloseUpdate';
import type { InstantUpdatePartial as _lnrpc_InstantUpdatePartial, InstantUpdate as _lnrpc_InstantUpdate } from '../lnrpc/InstantUpdate';

export interface CloseStatusUpdatePartial {
  'closePending'?: (_lnrpc_PendingUpdatePartial | null);
  'chanClose'?: (_lnrpc_ChannelCloseUpdatePartial | null);
  'closeInstant'?: (_lnrpc_InstantUpdatePartial | null);
  'update'?: "closePending"|"chanClose"|"closeInstant";
}

export interface CloseStatusUpdate {
  'closePending'?: (_lnrpc_PendingUpdate | null);
  'chanClose'?: (_lnrpc_ChannelCloseUpdate | null);
  'closeInstant'?: (_lnrpc_InstantUpdate | null);
  'update': "closePending"|"chanClose"|"closeInstant";
}
