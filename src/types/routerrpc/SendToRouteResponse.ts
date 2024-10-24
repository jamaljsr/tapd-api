// Original file: protos/routerrpc/router.proto

import type { FailurePartial as _lnrpc_FailurePartial, Failure as _lnrpc_Failure } from '../lnrpc/Failure';

export interface SendToRouteResponsePartial {
  'preimage'?: (Buffer | Uint8Array | string);
  'failure'?: (_lnrpc_FailurePartial | null);
}

export interface SendToRouteResponse {
  'preimage': (Buffer);
  'failure': (_lnrpc_Failure | null);
}
