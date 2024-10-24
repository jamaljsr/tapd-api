// Original file: protos/routerrpc/router.proto

import type { PaymentFailureReasonPartial as _lnrpc_PaymentFailureReasonPartial, PaymentFailureReason as _lnrpc_PaymentFailureReason } from '../lnrpc/PaymentFailureReason';
import type { Long } from '@grpc/proto-loader';

export interface RouteFeeResponsePartial {
  'routingFeeMsat'?: (number | string | Long);
  'timeLockDelay'?: (number | string | Long);
  'failureReason'?: (_lnrpc_PaymentFailureReasonPartial);
}

export interface RouteFeeResponse {
  'routingFeeMsat': (string);
  'timeLockDelay': (string);
  'failureReason': (_lnrpc_PaymentFailureReason);
}
