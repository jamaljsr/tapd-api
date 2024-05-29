// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface SubscribeReceiveEventsRequestPartial {
  'filterAddr'?: (string);
  'startTimestamp'?: (number | string | Long);
}

export interface SubscribeReceiveEventsRequest {
  'filterAddr': (string);
  'startTimestamp': (string);
}
