// Original file: protos/routerrpc/router.proto

import type { PaymentStatePartial as _routerrpc_PaymentStatePartial, PaymentState as _routerrpc_PaymentState } from '../routerrpc/PaymentState';
import type { HTLCAttemptPartial as _lnrpc_HTLCAttemptPartial, HTLCAttempt as _lnrpc_HTLCAttempt } from '../lnrpc/HTLCAttempt';

export interface PaymentStatusPartial {
  'state'?: (_routerrpc_PaymentStatePartial);
  'preimage'?: (Buffer | Uint8Array | string);
  'htlcs'?: (_lnrpc_HTLCAttemptPartial)[];
}

export interface PaymentStatus {
  'state': (_routerrpc_PaymentState);
  'preimage': (Buffer);
  'htlcs': (_lnrpc_HTLCAttempt)[];
}
