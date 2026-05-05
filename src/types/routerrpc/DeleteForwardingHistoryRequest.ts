// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface DeleteForwardingHistoryRequestPartial {
  'deleteBeforeTime'?: (number | string | Long);
  'deleteBeforeDuration'?: (string);
  'timeSpec'?: "deleteBeforeTime"|"deleteBeforeDuration";
}

export interface DeleteForwardingHistoryRequest {
  'deleteBeforeTime'?: (string);
  'deleteBeforeDuration'?: (string);
  'timeSpec': "deleteBeforeTime"|"deleteBeforeDuration";
}
