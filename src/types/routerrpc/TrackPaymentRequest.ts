// Original file: protos/routerrpc/router.proto


export interface TrackPaymentRequestPartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
  'noInflightUpdates'?: (boolean);
}

export interface TrackPaymentRequest {
  'paymentHash': (Buffer);
  'noInflightUpdates': (boolean);
}
