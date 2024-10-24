// Original file: protos/lightning.proto

import type { TransactionPartial as _lnrpc_TransactionPartial, Transaction as _lnrpc_Transaction } from '../lnrpc/Transaction';

export interface TransactionDetailsPartial {
  'transactions'?: (_lnrpc_TransactionPartial)[];
}

export interface TransactionDetails {
  'transactions': (_lnrpc_Transaction)[];
}
