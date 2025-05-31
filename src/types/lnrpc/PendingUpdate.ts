// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface PendingUpdatePartial {
  'txid'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
  'feePerVbyte'?: (number | string | Long);
  'localCloseTx'?: (boolean);
}

export interface PendingUpdate {
  'txid': (Buffer);
  'outputIndex': (number);
  'feePerVbyte': (string);
  'localCloseTx': (boolean);
}
