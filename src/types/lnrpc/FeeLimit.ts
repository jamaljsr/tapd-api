// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface FeeLimitPartial {
  'fixed'?: (number | string | Long);
  'percent'?: (number | string | Long);
  'fixedMsat'?: (number | string | Long);
  'limit'?: "fixed"|"fixedMsat"|"percent";
}

export interface FeeLimit {
  'fixed'?: (string);
  'percent'?: (string);
  'fixedMsat'?: (string);
  'limit': "fixed"|"fixedMsat"|"percent";
}
