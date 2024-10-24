// Original file: protos/lightning.proto


export interface DeleteAllPaymentsRequestPartial {
  'failedPaymentsOnly'?: (boolean);
  'failedHtlcsOnly'?: (boolean);
  'allPayments'?: (boolean);
}

export interface DeleteAllPaymentsRequest {
  'failedPaymentsOnly': (boolean);
  'failedHtlcsOnly': (boolean);
  'allPayments': (boolean);
}
