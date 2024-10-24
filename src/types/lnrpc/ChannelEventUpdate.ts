// Original file: protos/lightning.proto

import type { ChannelPartial as _lnrpc_ChannelPartial, Channel as _lnrpc_Channel } from '../lnrpc/Channel';
import type { ChannelCloseSummaryPartial as _lnrpc_ChannelCloseSummaryPartial, ChannelCloseSummary as _lnrpc_ChannelCloseSummary } from '../lnrpc/ChannelCloseSummary';
import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { PendingUpdatePartial as _lnrpc_PendingUpdatePartial, PendingUpdate as _lnrpc_PendingUpdate } from '../lnrpc/PendingUpdate';

// Original file: protos/lightning.proto

export const _lnrpc_ChannelEventUpdate_UpdateType = {
  OPEN_CHANNEL: 'OPEN_CHANNEL',
  CLOSED_CHANNEL: 'CLOSED_CHANNEL',
  ACTIVE_CHANNEL: 'ACTIVE_CHANNEL',
  INACTIVE_CHANNEL: 'INACTIVE_CHANNEL',
  PENDING_OPEN_CHANNEL: 'PENDING_OPEN_CHANNEL',
  FULLY_RESOLVED_CHANNEL: 'FULLY_RESOLVED_CHANNEL',
} as const;

export type _lnrpc_ChannelEventUpdate_UpdateTypePartial =
  | 'OPEN_CHANNEL'
  | 0
  | 'CLOSED_CHANNEL'
  | 1
  | 'ACTIVE_CHANNEL'
  | 2
  | 'INACTIVE_CHANNEL'
  | 3
  | 'PENDING_OPEN_CHANNEL'
  | 4
  | 'FULLY_RESOLVED_CHANNEL'
  | 5

export type _lnrpc_ChannelEventUpdate_UpdateType = typeof _lnrpc_ChannelEventUpdate_UpdateType[keyof typeof _lnrpc_ChannelEventUpdate_UpdateType]

export interface ChannelEventUpdatePartial {
  'openChannel'?: (_lnrpc_ChannelPartial | null);
  'closedChannel'?: (_lnrpc_ChannelCloseSummaryPartial | null);
  'activeChannel'?: (_lnrpc_ChannelPointPartial | null);
  'inactiveChannel'?: (_lnrpc_ChannelPointPartial | null);
  'type'?: (_lnrpc_ChannelEventUpdate_UpdateTypePartial);
  'pendingOpenChannel'?: (_lnrpc_PendingUpdatePartial | null);
  'fullyResolvedChannel'?: (_lnrpc_ChannelPointPartial | null);
  'channel'?: "openChannel"|"closedChannel"|"activeChannel"|"inactiveChannel"|"pendingOpenChannel"|"fullyResolvedChannel";
}

export interface ChannelEventUpdate {
  'openChannel'?: (_lnrpc_Channel | null);
  'closedChannel'?: (_lnrpc_ChannelCloseSummary | null);
  'activeChannel'?: (_lnrpc_ChannelPoint | null);
  'inactiveChannel'?: (_lnrpc_ChannelPoint | null);
  'type': (_lnrpc_ChannelEventUpdate_UpdateType);
  'pendingOpenChannel'?: (_lnrpc_PendingUpdate | null);
  'fullyResolvedChannel'?: (_lnrpc_ChannelPoint | null);
  'channel': "openChannel"|"closedChannel"|"activeChannel"|"inactiveChannel"|"pendingOpenChannel"|"fullyResolvedChannel";
}
