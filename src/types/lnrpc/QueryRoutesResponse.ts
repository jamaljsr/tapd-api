// Original file: protos/lightning.proto

import type { RoutePartial as _lnrpc_RoutePartial, Route as _lnrpc_Route } from '../lnrpc/Route';

export interface QueryRoutesResponsePartial {
  'routes'?: (_lnrpc_RoutePartial)[];
  'successProb'?: (number | string);
}

export interface QueryRoutesResponse {
  'routes': (_lnrpc_Route)[];
  'successProb': (number);
}
