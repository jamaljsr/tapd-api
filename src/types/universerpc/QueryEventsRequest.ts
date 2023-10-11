// Original file: protos/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface QueryEventsRequestPartial {
  'startTimestamp'?: (number | string | Long);
  'endTimestamp'?: (number | string | Long);
}

export interface QueryEventsRequest {
  'startTimestamp': (string);
  'endTimestamp': (string);
}
