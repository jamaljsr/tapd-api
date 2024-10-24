// Original file: protos/lightning.proto


export interface DeletePaymentRequestPartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
  'failedHtlcsOnly'?: (boolean);
}

export interface DeletePaymentRequest {
  'paymentHash': (Buffer);
  'failedHtlcsOnly': (boolean);
}
