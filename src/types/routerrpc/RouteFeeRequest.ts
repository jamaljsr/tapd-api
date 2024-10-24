// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface RouteFeeRequestPartial {
  'dest'?: (Buffer | Uint8Array | string);
  'amtSat'?: (number | string | Long);
  'paymentRequest'?: (string);
  'timeout'?: (number);
}

export interface RouteFeeRequest {
  'dest': (Buffer);
  'amtSat': (string);
  'paymentRequest': (string);
  'timeout': (number);
}
