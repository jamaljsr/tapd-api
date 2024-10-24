// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface QueryProbabilityRequestPartial {
  'fromNode'?: (Buffer | Uint8Array | string);
  'toNode'?: (Buffer | Uint8Array | string);
  'amtMsat'?: (number | string | Long);
}

export interface QueryProbabilityRequest {
  'fromNode': (Buffer);
  'toNode': (Buffer);
  'amtMsat': (string);
}
