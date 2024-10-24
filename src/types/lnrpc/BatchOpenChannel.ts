// Original file: protos/lightning.proto

import type { CommitmentTypePartial as _lnrpc_CommitmentTypePartial, CommitmentType as _lnrpc_CommitmentType } from '../lnrpc/CommitmentType';
import type { Long } from '@grpc/proto-loader';

export interface BatchOpenChannelPartial {
  'nodePubkey'?: (Buffer | Uint8Array | string);
  'localFundingAmount'?: (number | string | Long);
  'pushSat'?: (number | string | Long);
  'private'?: (boolean);
  'minHtlcMsat'?: (number | string | Long);
  'remoteCsvDelay'?: (number);
  'closeAddress'?: (string);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'commitmentType'?: (_lnrpc_CommitmentTypePartial);
  'remoteMaxValueInFlightMsat'?: (number | string | Long);
  'remoteMaxHtlcs'?: (number);
  'maxLocalCsv'?: (number);
  'zeroConf'?: (boolean);
  'scidAlias'?: (boolean);
  'baseFee'?: (number | string | Long);
  'feeRate'?: (number | string | Long);
  'useBaseFee'?: (boolean);
  'useFeeRate'?: (boolean);
  'remoteChanReserveSat'?: (number | string | Long);
  'memo'?: (string);
}

export interface BatchOpenChannel {
  'nodePubkey': (Buffer);
  'localFundingAmount': (string);
  'pushSat': (string);
  'private': (boolean);
  'minHtlcMsat': (string);
  'remoteCsvDelay': (number);
  'closeAddress': (string);
  'pendingChanId': (Buffer);
  'commitmentType': (_lnrpc_CommitmentType);
  'remoteMaxValueInFlightMsat': (string);
  'remoteMaxHtlcs': (number);
  'maxLocalCsv': (number);
  'zeroConf': (boolean);
  'scidAlias': (boolean);
  'baseFee': (string);
  'feeRate': (string);
  'useBaseFee': (boolean);
  'useFeeRate': (boolean);
  'remoteChanReserveSat': (string);
  'memo': (string);
}
