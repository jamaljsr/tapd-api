// Original file: protos/lightning.proto

import type { FailedUpdatePartial as _lnrpc_FailedUpdatePartial, FailedUpdate as _lnrpc_FailedUpdate } from '../lnrpc/FailedUpdate';

export interface PolicyUpdateResponsePartial {
  'failedUpdates'?: (_lnrpc_FailedUpdatePartial)[];
}

export interface PolicyUpdateResponse {
  'failedUpdates': (_lnrpc_FailedUpdate)[];
}
