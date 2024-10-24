// Original file: protos/lightning.proto

import type { HTLCPartial as _lnrpc_HTLCPartial, HTLC as _lnrpc_HTLC } from '../lnrpc/HTLC';
import type { CommitmentTypePartial as _lnrpc_CommitmentTypePartial, CommitmentType as _lnrpc_CommitmentType } from '../lnrpc/CommitmentType';
import type { ChannelConstraintsPartial as _lnrpc_ChannelConstraintsPartial, ChannelConstraints as _lnrpc_ChannelConstraints } from '../lnrpc/ChannelConstraints';
import type { Long } from '@grpc/proto-loader';

export interface ChannelPartial {
  'active'?: (boolean);
  'remotePubkey'?: (string);
  'channelPoint'?: (string);
  'chanId'?: (number | string | Long);
  'capacity'?: (number | string | Long);
  'localBalance'?: (number | string | Long);
  'remoteBalance'?: (number | string | Long);
  'commitFee'?: (number | string | Long);
  'commitWeight'?: (number | string | Long);
  'feePerKw'?: (number | string | Long);
  'unsettledBalance'?: (number | string | Long);
  'totalSatoshisSent'?: (number | string | Long);
  'totalSatoshisReceived'?: (number | string | Long);
  'numUpdates'?: (number | string | Long);
  'pendingHtlcs'?: (_lnrpc_HTLCPartial)[];
  'csvDelay'?: (number);
  'private'?: (boolean);
  'initiator'?: (boolean);
  'chanStatusFlags'?: (string);
  'localChanReserveSat'?: (number | string | Long);
  'remoteChanReserveSat'?: (number | string | Long);
  'staticRemoteKey'?: (boolean);
  'lifetime'?: (number | string | Long);
  'uptime'?: (number | string | Long);
  'closeAddress'?: (string);
  'commitmentType'?: (_lnrpc_CommitmentTypePartial);
  'pushAmountSat'?: (number | string | Long);
  'thawHeight'?: (number);
  'localConstraints'?: (_lnrpc_ChannelConstraintsPartial | null);
  'remoteConstraints'?: (_lnrpc_ChannelConstraintsPartial | null);
  'aliasScids'?: (number | string | Long)[];
  'zeroConf'?: (boolean);
  'zeroConfConfirmedScid'?: (number | string | Long);
  'peerAlias'?: (string);
  'peerScidAlias'?: (number | string | Long);
  'memo'?: (string);
}

export interface Channel {
  'active': (boolean);
  'remotePubkey': (string);
  'channelPoint': (string);
  'chanId': (string);
  'capacity': (string);
  'localBalance': (string);
  'remoteBalance': (string);
  'commitFee': (string);
  'commitWeight': (string);
  'feePerKw': (string);
  'unsettledBalance': (string);
  'totalSatoshisSent': (string);
  'totalSatoshisReceived': (string);
  'numUpdates': (string);
  'pendingHtlcs': (_lnrpc_HTLC)[];
  'csvDelay': (number);
  'private': (boolean);
  'initiator': (boolean);
  'chanStatusFlags': (string);
  'localChanReserveSat': (string);
  'remoteChanReserveSat': (string);
  'staticRemoteKey': (boolean);
  'lifetime': (string);
  'uptime': (string);
  'closeAddress': (string);
  'commitmentType': (_lnrpc_CommitmentType);
  'pushAmountSat': (string);
  'thawHeight': (number);
  'localConstraints': (_lnrpc_ChannelConstraints | null);
  'remoteConstraints': (_lnrpc_ChannelConstraints | null);
  'aliasScids': (string)[];
  'zeroConf': (boolean);
  'zeroConfConfirmedScid': (string);
  'peerAlias': (string);
  'peerScidAlias': (string);
  'memo': (string);
}
