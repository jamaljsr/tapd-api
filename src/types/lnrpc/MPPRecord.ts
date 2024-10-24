// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface MPPRecordPartial {
  'totalAmtMsat'?: (number | string | Long);
  'paymentAddr'?: (Buffer | Uint8Array | string);
}

export interface MPPRecord {
  'totalAmtMsat': (string);
  'paymentAddr': (Buffer);
}
