// Original file: protos/routerrpc/router.proto

import type { CircuitKeyPartial as _routerrpc_CircuitKeyPartial, CircuitKey as _routerrpc_CircuitKey } from '../routerrpc/CircuitKey';
import type { ResolveHoldForwardActionPartial as _routerrpc_ResolveHoldForwardActionPartial, ResolveHoldForwardAction as _routerrpc_ResolveHoldForwardAction } from '../routerrpc/ResolveHoldForwardAction';
import type { _lnrpc_Failure_FailureCodePartial, _lnrpc_Failure_FailureCode } from '../lnrpc/Failure';

export interface ForwardHtlcInterceptResponsePartial {
  'incomingCircuitKey'?: (_routerrpc_CircuitKeyPartial | null);
  'action'?: (_routerrpc_ResolveHoldForwardActionPartial);
  'preimage'?: (Buffer | Uint8Array | string);
  'failureMessage'?: (Buffer | Uint8Array | string);
  'failureCode'?: (_lnrpc_Failure_FailureCodePartial);
}

export interface ForwardHtlcInterceptResponse {
  'incomingCircuitKey': (_routerrpc_CircuitKey | null);
  'action': (_routerrpc_ResolveHoldForwardAction);
  'preimage': (Buffer);
  'failureMessage': (Buffer);
  'failureCode': (_lnrpc_Failure_FailureCode);
}
