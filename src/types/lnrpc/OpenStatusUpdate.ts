// Original file: protos/lightning.proto

import type { PendingUpdatePartial as _lnrpc_PendingUpdatePartial, PendingUpdate as _lnrpc_PendingUpdate } from '../lnrpc/PendingUpdate';
import type { ChannelOpenUpdatePartial as _lnrpc_ChannelOpenUpdatePartial, ChannelOpenUpdate as _lnrpc_ChannelOpenUpdate } from '../lnrpc/ChannelOpenUpdate';
import type { ReadyForPsbtFundingPartial as _lnrpc_ReadyForPsbtFundingPartial, ReadyForPsbtFunding as _lnrpc_ReadyForPsbtFunding } from '../lnrpc/ReadyForPsbtFunding';

export interface OpenStatusUpdatePartial {
  'chanPending'?: (_lnrpc_PendingUpdatePartial | null);
  'chanOpen'?: (_lnrpc_ChannelOpenUpdatePartial | null);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'psbtFund'?: (_lnrpc_ReadyForPsbtFundingPartial | null);
  'update'?: "chanPending"|"chanOpen"|"psbtFund";
}

export interface OpenStatusUpdate {
  'chanPending'?: (_lnrpc_PendingUpdate | null);
  'chanOpen'?: (_lnrpc_ChannelOpenUpdate | null);
  'pendingChanId': (Buffer);
  'psbtFund'?: (_lnrpc_ReadyForPsbtFunding | null);
  'update': "chanPending"|"chanOpen"|"psbtFund";
}
