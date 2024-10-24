// Original file: protos/lightning.proto

import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { UpdateFailurePartial as _lnrpc_UpdateFailurePartial, UpdateFailure as _lnrpc_UpdateFailure } from '../lnrpc/UpdateFailure';

export interface FailedUpdatePartial {
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'reason'?: (_lnrpc_UpdateFailurePartial);
  'updateError'?: (string);
}

export interface FailedUpdate {
  'outpoint': (_lnrpc_OutPoint | null);
  'reason': (_lnrpc_UpdateFailure);
  'updateError': (string);
}
