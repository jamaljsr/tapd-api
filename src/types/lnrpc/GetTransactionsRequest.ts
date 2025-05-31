// Original file: protos/lightning.proto


export interface GetTransactionsRequestPartial {
  'startHeight'?: (number);
  'endHeight'?: (number);
  'account'?: (string);
  'indexOffset'?: (number);
  'maxTransactions'?: (number);
}

export interface GetTransactionsRequest {
  'startHeight': (number);
  'endHeight': (number);
  'account': (string);
  'indexOffset': (number);
  'maxTransactions': (number);
}
