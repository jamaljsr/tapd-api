// Original file: protos/lightning.proto

import type { RoutePartial as _lnrpc_RoutePartial, Route as _lnrpc_Route } from '../lnrpc/Route';
import type { FailurePartial as _lnrpc_FailurePartial, Failure as _lnrpc_Failure } from '../lnrpc/Failure';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/lightning.proto

export const _lnrpc_HTLCAttempt_HTLCStatus = {
  IN_FLIGHT: 'IN_FLIGHT',
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
} as const;

export type _lnrpc_HTLCAttempt_HTLCStatusPartial =
  | 'IN_FLIGHT'
  | 0
  | 'SUCCEEDED'
  | 1
  | 'FAILED'
  | 2

export type _lnrpc_HTLCAttempt_HTLCStatus = typeof _lnrpc_HTLCAttempt_HTLCStatus[keyof typeof _lnrpc_HTLCAttempt_HTLCStatus]

export interface HTLCAttemptPartial {
  'status'?: (_lnrpc_HTLCAttempt_HTLCStatusPartial);
  'route'?: (_lnrpc_RoutePartial | null);
  'attemptTimeNs'?: (number | string | Long);
  'resolveTimeNs'?: (number | string | Long);
  'failure'?: (_lnrpc_FailurePartial | null);
  'preimage'?: (Buffer | Uint8Array | string);
  'attemptId'?: (number | string | Long);
}

export interface HTLCAttempt {
  'status': (_lnrpc_HTLCAttempt_HTLCStatus);
  'route': (_lnrpc_Route | null);
  'attemptTimeNs': (string);
  'resolveTimeNs': (string);
  'failure': (_lnrpc_Failure | null);
  'preimage': (Buffer);
  'attemptId': (string);
}
