// Original file: protos/lightning.proto


export interface PaymentHashPartial {
  'rHashStr'?: (string);
  'rHash'?: (Buffer | Uint8Array | string);
}

export interface PaymentHash {
  'rHashStr': (string);
  'rHash': (Buffer);
}
