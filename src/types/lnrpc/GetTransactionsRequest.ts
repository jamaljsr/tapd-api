// Original file: protos/lightning.proto


export interface GetTransactionsRequestPartial {
  'startHeight'?: (number);
  'endHeight'?: (number);
  'account'?: (string);
}

export interface GetTransactionsRequest {
  'startHeight': (number);
  'endHeight': (number);
  'account': (string);
}
