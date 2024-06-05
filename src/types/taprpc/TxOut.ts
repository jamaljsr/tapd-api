// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface TxOutPartial {
  'value'?: (number | string | Long);
  'pkScript'?: (Buffer | Uint8Array | string);
}

export interface TxOut {
  'value': (string);
  'pkScript': (Buffer);
}
