// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface FindBaseAliasRequestPartial {
  'alias'?: (number | string | Long);
}

export interface FindBaseAliasRequest {
  'alias': (string);
}
