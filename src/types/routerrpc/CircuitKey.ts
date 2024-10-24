// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface CircuitKeyPartial {
  'chanId'?: (number | string | Long);
  'htlcId'?: (number | string | Long);
}

export interface CircuitKey {
  'chanId': (string);
  'htlcId': (string);
}
