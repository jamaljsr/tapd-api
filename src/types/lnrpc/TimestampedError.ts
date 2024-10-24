// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface TimestampedErrorPartial {
  'timestamp'?: (number | string | Long);
  'error'?: (string);
}

export interface TimestampedError {
  'timestamp': (string);
  'error': (string);
}
