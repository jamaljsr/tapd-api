// Original file: protos/priceoraclerpc/price_oracle.proto

import type { Long } from '@grpc/proto-loader';

export interface RateTickPartial {
  'rate'?: (number | string | Long);
  'expiryTimestamp'?: (number | string | Long);
}

export interface RateTick {
  'rate': (string);
  'expiryTimestamp': (string);
}
