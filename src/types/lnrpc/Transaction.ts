// Original file: protos/lightning.proto

import type { OutputDetailPartial as _lnrpc_OutputDetailPartial, OutputDetail as _lnrpc_OutputDetail } from '../lnrpc/OutputDetail';
import type { PreviousOutPointPartial as _lnrpc_PreviousOutPointPartial, PreviousOutPoint as _lnrpc_PreviousOutPoint } from '../lnrpc/PreviousOutPoint';
import type { Long } from '@grpc/proto-loader';

export interface TransactionPartial {
  'txHash'?: (string);
  'amount'?: (number | string | Long);
  'numConfirmations'?: (number);
  'blockHash'?: (string);
  'blockHeight'?: (number);
  'timeStamp'?: (number | string | Long);
  'totalFees'?: (number | string | Long);
  'destAddresses'?: (string)[];
  'rawTxHex'?: (string);
  'label'?: (string);
  'outputDetails'?: (_lnrpc_OutputDetailPartial)[];
  'previousOutpoints'?: (_lnrpc_PreviousOutPointPartial)[];
}

export interface Transaction {
  'txHash': (string);
  'amount': (string);
  'numConfirmations': (number);
  'blockHash': (string);
  'blockHeight': (number);
  'timeStamp': (string);
  'totalFees': (string);
  'destAddresses': (string)[];
  'rawTxHex': (string);
  'label': (string);
  'outputDetails': (_lnrpc_OutputDetail)[];
  'previousOutpoints': (_lnrpc_PreviousOutPoint)[];
}
