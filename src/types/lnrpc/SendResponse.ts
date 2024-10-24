// Original file: protos/lightning.proto

import type { RoutePartial as _lnrpc_RoutePartial, Route as _lnrpc_Route } from '../lnrpc/Route';

export interface SendResponsePartial {
  'paymentError'?: (string);
  'paymentPreimage'?: (Buffer | Uint8Array | string);
  'paymentRoute'?: (_lnrpc_RoutePartial | null);
  'paymentHash'?: (Buffer | Uint8Array | string);
}

export interface SendResponse {
  'paymentError': (string);
  'paymentPreimage': (Buffer);
  'paymentRoute': (_lnrpc_Route | null);
  'paymentHash': (Buffer);
}
