// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface AddInvoiceResponsePartial {
  'rHash'?: (Buffer | Uint8Array | string);
  'paymentRequest'?: (string);
  'addIndex'?: (number | string | Long);
  'paymentAddr'?: (Buffer | Uint8Array | string);
}

export interface AddInvoiceResponse {
  'rHash': (Buffer);
  'paymentRequest': (string);
  'addIndex': (string);
  'paymentAddr': (Buffer);
}
