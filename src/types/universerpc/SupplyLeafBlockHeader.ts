// Original file: protos/universerpc/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface SupplyLeafBlockHeaderPartial {
  'timestamp'?: (number | string | Long);
  'hash'?: (Buffer | Uint8Array | string);
}

export interface SupplyLeafBlockHeader {
  'timestamp': (string);
  'hash': (Buffer);
}
