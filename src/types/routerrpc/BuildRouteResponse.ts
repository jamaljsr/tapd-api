// Original file: protos/routerrpc/router.proto

import type { RoutePartial as _lnrpc_RoutePartial, Route as _lnrpc_Route } from '../lnrpc/Route';

export interface BuildRouteResponsePartial {
  'route'?: (_lnrpc_RoutePartial | null);
}

export interface BuildRouteResponse {
  'route': (_lnrpc_Route | null);
}
