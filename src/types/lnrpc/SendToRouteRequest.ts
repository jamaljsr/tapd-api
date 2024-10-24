// Original file: protos/lightning.proto

import type { RoutePartial as _lnrpc_RoutePartial, Route as _lnrpc_Route } from '../lnrpc/Route';

export interface SendToRouteRequestPartial {
  'paymentHash'?: (Buffer | Uint8Array | string);
  'paymentHashString'?: (string);
  'route'?: (_lnrpc_RoutePartial | null);
}

export interface SendToRouteRequest {
  'paymentHash': (Buffer);
  'paymentHashString': (string);
  'route': (_lnrpc_Route | null);
}
