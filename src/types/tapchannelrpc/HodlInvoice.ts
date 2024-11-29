// Original file: protos/tapchannelrpc/tapchannel.proto


export interface HodlInvoicePartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
}

export interface HodlInvoice {
  'paymentHash': (Buffer);
}
