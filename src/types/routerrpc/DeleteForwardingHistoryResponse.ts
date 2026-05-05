// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface DeleteForwardingHistoryResponsePartial {
  'eventsDeleted'?: (number | string | Long);
  'totalFeeMsat'?: (number | string | Long);
  'status'?: (string);
}

export interface DeleteForwardingHistoryResponse {
  'eventsDeleted': (string);
  'totalFeeMsat': (string);
  'status': (string);
}
