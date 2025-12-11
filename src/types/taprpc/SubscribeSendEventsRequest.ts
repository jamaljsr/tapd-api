// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface SubscribeSendEventsRequestPartial {
  'filterScriptKey'?: (Buffer | Uint8Array | string);
  'filterLabel'?: (string);
  'startTimestamp'?: (number | string | Long);
}

export interface SubscribeSendEventsRequest {
  'filterScriptKey': (Buffer);
  'filterLabel': (string);
  'startTimestamp': (string);
}
