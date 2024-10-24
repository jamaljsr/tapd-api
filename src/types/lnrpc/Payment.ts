// Original file: protos/lightning.proto

import type { HTLCAttemptPartial as _lnrpc_HTLCAttemptPartial, HTLCAttempt as _lnrpc_HTLCAttempt } from '../lnrpc/HTLCAttempt';
import type { PaymentFailureReasonPartial as _lnrpc_PaymentFailureReasonPartial, PaymentFailureReason as _lnrpc_PaymentFailureReason } from '../lnrpc/PaymentFailureReason';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/lightning.proto

export const _lnrpc_Payment_PaymentStatus = {
  UNKNOWN: 'UNKNOWN',
  IN_FLIGHT: 'IN_FLIGHT',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  INITIATED: 'INITIATED',
} as const;

export type _lnrpc_Payment_PaymentStatusPartial =
  | 'UNKNOWN'
  | 0
  | 'IN_FLIGHT'
  | 1
  | 'SUCCEEDED'
  | 2
  | 'FAILED'
  | 3
  | 'INITIATED'
  | 4

export type _lnrpc_Payment_PaymentStatus = typeof _lnrpc_Payment_PaymentStatus[keyof typeof _lnrpc_Payment_PaymentStatus]

export interface PaymentPartial {
  'paymentHash'?: (string);
  'value'?: (number | string | Long);
  'creationDate'?: (number | string | Long);
  'fee'?: (number | string | Long);
  'paymentPreimage'?: (string);
  'valueSat'?: (number | string | Long);
  'valueMsat'?: (number | string | Long);
  'paymentRequest'?: (string);
  'status'?: (_lnrpc_Payment_PaymentStatusPartial);
  'feeSat'?: (number | string | Long);
  'feeMsat'?: (number | string | Long);
  'creationTimeNs'?: (number | string | Long);
  'htlcs'?: (_lnrpc_HTLCAttemptPartial)[];
  'paymentIndex'?: (number | string | Long);
  'failureReason'?: (_lnrpc_PaymentFailureReasonPartial);
}

export interface Payment {
  'paymentHash': (string);
  'value': (string);
  'creationDate': (string);
  'fee': (string);
  'paymentPreimage': (string);
  'valueSat': (string);
  'valueMsat': (string);
  'paymentRequest': (string);
  'status': (_lnrpc_Payment_PaymentStatus);
  'feeSat': (string);
  'feeMsat': (string);
  'creationTimeNs': (string);
  'htlcs': (_lnrpc_HTLCAttempt)[];
  'paymentIndex': (string);
  'failureReason': (_lnrpc_PaymentFailureReason);
}
