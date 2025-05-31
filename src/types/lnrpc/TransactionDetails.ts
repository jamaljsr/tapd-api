// Original file: protos/lightning.proto

import type { TransactionPartial as _lnrpc_TransactionPartial, Transaction as _lnrpc_Transaction } from '../lnrpc/Transaction';
import type { Long } from '@grpc/proto-loader';

export interface TransactionDetailsPartial {
  'transactions'?: (_lnrpc_TransactionPartial)[];
  'lastIndex'?: (number | string | Long);
  'firstIndex'?: (number | string | Long);
}

export interface TransactionDetails {
  'transactions': (_lnrpc_Transaction)[];
  'lastIndex': (string);
  'firstIndex': (string);
}
