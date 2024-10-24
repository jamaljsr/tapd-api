// Original file: protos/lightning.proto

import type { FundingShimPartial as _lnrpc_FundingShimPartial, FundingShim as _lnrpc_FundingShim } from '../lnrpc/FundingShim';
import type { CommitmentTypePartial as _lnrpc_CommitmentTypePartial, CommitmentType as _lnrpc_CommitmentType } from '../lnrpc/CommitmentType';
import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface OpenChannelRequestPartial {
  'satPerVbyte'?: (number | string | Long);
  'nodePubkey'?: (Buffer | Uint8Array | string);
  'nodePubkeyString'?: (string);
  'localFundingAmount'?: (number | string | Long);
  'pushSat'?: (number | string | Long);
  'targetConf'?: (number);
  'satPerByte'?: (number | string | Long);
  'private'?: (boolean);
  'minHtlcMsat'?: (number | string | Long);
  'remoteCsvDelay'?: (number);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'closeAddress'?: (string);
  'fundingShim'?: (_lnrpc_FundingShimPartial | null);
  'remoteMaxValueInFlightMsat'?: (number | string | Long);
  'remoteMaxHtlcs'?: (number);
  'maxLocalCsv'?: (number);
  'commitmentType'?: (_lnrpc_CommitmentTypePartial);
  'zeroConf'?: (boolean);
  'scidAlias'?: (boolean);
  'baseFee'?: (number | string | Long);
  'feeRate'?: (number | string | Long);
  'useBaseFee'?: (boolean);
  'useFeeRate'?: (boolean);
  'remoteChanReserveSat'?: (number | string | Long);
  'fundMax'?: (boolean);
  'memo'?: (string);
  'outpoints'?: (_lnrpc_OutPointPartial)[];
}

export interface OpenChannelRequest {
  'satPerVbyte': (string);
  'nodePubkey': (Buffer);
  'nodePubkeyString': (string);
  'localFundingAmount': (string);
  'pushSat': (string);
  'targetConf': (number);
  'satPerByte': (string);
  'private': (boolean);
  'minHtlcMsat': (string);
  'remoteCsvDelay': (number);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'closeAddress': (string);
  'fundingShim': (_lnrpc_FundingShim | null);
  'remoteMaxValueInFlightMsat': (string);
  'remoteMaxHtlcs': (number);
  'maxLocalCsv': (number);
  'commitmentType': (_lnrpc_CommitmentType);
  'zeroConf': (boolean);
  'scidAlias': (boolean);
  'baseFee': (string);
  'feeRate': (string);
  'useBaseFee': (boolean);
  'useFeeRate': (boolean);
  'remoteChanReserveSat': (string);
  'fundMax': (boolean);
  'memo': (string);
  'outpoints': (_lnrpc_OutPoint)[];
}
