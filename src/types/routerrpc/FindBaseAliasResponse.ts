// Original file: protos/routerrpc/router.proto

import type { Long } from '@grpc/proto-loader';

export interface FindBaseAliasResponsePartial {
  'base'?: (number | string | Long);
}

export interface FindBaseAliasResponse {
  'base': (string);
}
