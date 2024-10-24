// Original file: protos/routerrpc/router.proto

import type { HtlcInfoPartial as _routerrpc_HtlcInfoPartial, HtlcInfo as _routerrpc_HtlcInfo } from '../routerrpc/HtlcInfo';
import type { _lnrpc_Failure_FailureCodePartial, _lnrpc_Failure_FailureCode } from '../lnrpc/Failure';
import type { FailureDetailPartial as _routerrpc_FailureDetailPartial, FailureDetail as _routerrpc_FailureDetail } from '../routerrpc/FailureDetail';

export interface LinkFailEventPartial {
  'info'?: (_routerrpc_HtlcInfoPartial | null);
  'wireFailure'?: (_lnrpc_Failure_FailureCodePartial);
  'failureDetail'?: (_routerrpc_FailureDetailPartial);
  'failureString'?: (string);
}

export interface LinkFailEvent {
  'info': (_routerrpc_HtlcInfo | null);
  'wireFailure': (_lnrpc_Failure_FailureCode);
  'failureDetail': (_routerrpc_FailureDetail);
  'failureString': (string);
}
