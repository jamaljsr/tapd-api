// Original file: protos/lightning.proto

import type { InitiatorPartial as _lnrpc_InitiatorPartial, Initiator as _lnrpc_Initiator } from '../lnrpc/Initiator';
import type { CommitmentTypePartial as _lnrpc_CommitmentTypePartial, CommitmentType as _lnrpc_CommitmentType } from '../lnrpc/CommitmentType';
import type { PendingHTLCPartial as _lnrpc_PendingHTLCPartial, PendingHTLC as _lnrpc_PendingHTLC } from '../lnrpc/PendingHTLC';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/lightning.proto

export const _lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorState = {
  LIMBO: 'LIMBO',
  RECOVERED: 'RECOVERED',
  LOST: 'LOST',
} as const;

export type _lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorStatePartial =
  | 'LIMBO'
  | 0
  | 'RECOVERED'
  | 1
  | 'LOST'
  | 2

export type _lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorState = typeof _lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorState[keyof typeof _lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorState]

export interface _lnrpc_PendingChannelsResponse_ClosedChannelPartial {
  'channel'?: (_lnrpc_PendingChannelsResponse_PendingChannelPartial | null);
  'closingTxid'?: (string);
}

export interface _lnrpc_PendingChannelsResponse_ClosedChannel {
  'channel': (_lnrpc_PendingChannelsResponse_PendingChannel | null);
  'closingTxid': (string);
}

export interface _lnrpc_PendingChannelsResponse_CommitmentsPartial {
  'localTxid'?: (string);
  'remoteTxid'?: (string);
  'remotePendingTxid'?: (string);
  'localCommitFeeSat'?: (number | string | Long);
  'remoteCommitFeeSat'?: (number | string | Long);
  'remotePendingCommitFeeSat'?: (number | string | Long);
}

export interface _lnrpc_PendingChannelsResponse_Commitments {
  'localTxid': (string);
  'remoteTxid': (string);
  'remotePendingTxid': (string);
  'localCommitFeeSat': (string);
  'remoteCommitFeeSat': (string);
  'remotePendingCommitFeeSat': (string);
}

export interface _lnrpc_PendingChannelsResponse_ForceClosedChannelPartial {
  'channel'?: (_lnrpc_PendingChannelsResponse_PendingChannelPartial | null);
  'closingTxid'?: (string);
  'limboBalance'?: (number | string | Long);
  'maturityHeight'?: (number);
  'blocksTilMaturity'?: (number);
  'recoveredBalance'?: (number | string | Long);
  'pendingHtlcs'?: (_lnrpc_PendingHTLCPartial)[];
  'anchor'?: (_lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorStatePartial);
}

export interface _lnrpc_PendingChannelsResponse_ForceClosedChannel {
  'channel': (_lnrpc_PendingChannelsResponse_PendingChannel | null);
  'closingTxid': (string);
  'limboBalance': (string);
  'maturityHeight': (number);
  'blocksTilMaturity': (number);
  'recoveredBalance': (string);
  'pendingHtlcs': (_lnrpc_PendingHTLC)[];
  'anchor': (_lnrpc_PendingChannelsResponse_ForceClosedChannel_AnchorState);
}

export interface _lnrpc_PendingChannelsResponse_PendingChannelPartial {
  'remoteNodePub'?: (string);
  'channelPoint'?: (string);
  'capacity'?: (number | string | Long);
  'localBalance'?: (number | string | Long);
  'remoteBalance'?: (number | string | Long);
  'localChanReserveSat'?: (number | string | Long);
  'remoteChanReserveSat'?: (number | string | Long);
  'initiator'?: (_lnrpc_InitiatorPartial);
  'commitmentType'?: (_lnrpc_CommitmentTypePartial);
  'numForwardingPackages'?: (number | string | Long);
  'chanStatusFlags'?: (string);
  'private'?: (boolean);
  'memo'?: (string);
  'customChannelData'?: (Buffer | Uint8Array | string);
}

export interface _lnrpc_PendingChannelsResponse_PendingChannel {
  'remoteNodePub': (string);
  'channelPoint': (string);
  'capacity': (string);
  'localBalance': (string);
  'remoteBalance': (string);
  'localChanReserveSat': (string);
  'remoteChanReserveSat': (string);
  'initiator': (_lnrpc_Initiator);
  'commitmentType': (_lnrpc_CommitmentType);
  'numForwardingPackages': (string);
  'chanStatusFlags': (string);
  'private': (boolean);
  'memo': (string);
  'customChannelData': (Buffer);
}

export interface _lnrpc_PendingChannelsResponse_PendingOpenChannelPartial {
  'channel'?: (_lnrpc_PendingChannelsResponse_PendingChannelPartial | null);
  'commitFee'?: (number | string | Long);
  'commitWeight'?: (number | string | Long);
  'feePerKw'?: (number | string | Long);
  'fundingExpiryBlocks'?: (number);
}

export interface _lnrpc_PendingChannelsResponse_PendingOpenChannel {
  'channel': (_lnrpc_PendingChannelsResponse_PendingChannel | null);
  'commitFee': (string);
  'commitWeight': (string);
  'feePerKw': (string);
  'fundingExpiryBlocks': (number);
}

export interface _lnrpc_PendingChannelsResponse_WaitingCloseChannelPartial {
  'channel'?: (_lnrpc_PendingChannelsResponse_PendingChannelPartial | null);
  'limboBalance'?: (number | string | Long);
  'commitments'?: (_lnrpc_PendingChannelsResponse_CommitmentsPartial | null);
  'closingTxid'?: (string);
  'closingTxHex'?: (string);
}

export interface _lnrpc_PendingChannelsResponse_WaitingCloseChannel {
  'channel': (_lnrpc_PendingChannelsResponse_PendingChannel | null);
  'limboBalance': (string);
  'commitments': (_lnrpc_PendingChannelsResponse_Commitments | null);
  'closingTxid': (string);
  'closingTxHex': (string);
}

export interface PendingChannelsResponsePartial {
  'totalLimboBalance'?: (number | string | Long);
  'pendingOpenChannels'?: (_lnrpc_PendingChannelsResponse_PendingOpenChannelPartial)[];
  'pendingClosingChannels'?: (_lnrpc_PendingChannelsResponse_ClosedChannelPartial)[];
  'pendingForceClosingChannels'?: (_lnrpc_PendingChannelsResponse_ForceClosedChannelPartial)[];
  'waitingCloseChannels'?: (_lnrpc_PendingChannelsResponse_WaitingCloseChannelPartial)[];
}

export interface PendingChannelsResponse {
  'totalLimboBalance': (string);
  'pendingOpenChannels': (_lnrpc_PendingChannelsResponse_PendingOpenChannel)[];
  'pendingClosingChannels': (_lnrpc_PendingChannelsResponse_ClosedChannel)[];
  'pendingForceClosingChannels': (_lnrpc_PendingChannelsResponse_ForceClosedChannel)[];
  'waitingCloseChannels': (_lnrpc_PendingChannelsResponse_WaitingCloseChannel)[];
}
