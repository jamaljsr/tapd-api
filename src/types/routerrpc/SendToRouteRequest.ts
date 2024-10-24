// Original file: protos/routerrpc/router.proto

import type { RoutePartial as _lnrpc_RoutePartial, Route as _lnrpc_Route } from '../lnrpc/Route';

export interface SendToRouteRequestPartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
  'route'?: (_lnrpc_RoutePartial | null);
  'skipTempErr'?: (boolean);
}

export interface SendToRouteRequest {
  'paymentHash': (Buffer);
  'route': (_lnrpc_Route | null);
  'skipTempErr': (boolean);
}
