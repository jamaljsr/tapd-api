// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ForwardingHistoryRequestPartial {
  'startTime'?: (number | string | Long);
  'endTime'?: (number | string | Long);
  'indexOffset'?: (number);
  'numMaxEvents'?: (number);
  'peerAliasLookup'?: (boolean);
}

export interface ForwardingHistoryRequest {
  'startTime': (string);
  'endTime': (string);
  'indexOffset': (number);
  'numMaxEvents': (number);
  'peerAliasLookup': (boolean);
}
