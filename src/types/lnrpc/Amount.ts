// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface AmountPartial {
  'sat'?: (number | string | Long);
  'msat'?: (number | string | Long);
}

export interface Amount {
  'sat': (string);
  'msat': (string);
}
