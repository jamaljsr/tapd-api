// Original file: protos/rfqrpc/rfq.proto

import type { Long } from '@grpc/proto-loader';

export interface AcceptHtlcEventPartial {
  'timestamp'?: (number | string | Long);
  'scid'?: (number | string | Long);
}

export interface AcceptHtlcEvent {
  'timestamp': (string);
  'scid': (string);
}
