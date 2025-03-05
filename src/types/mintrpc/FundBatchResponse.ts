// Original file: protos/mintrpc/mint.proto

import type { VerboseBatchPartial as _mintrpc_VerboseBatchPartial, VerboseBatch as _mintrpc_VerboseBatch } from '../mintrpc/VerboseBatch';

export interface FundBatchResponsePartial {
  'batch'?: (_mintrpc_VerboseBatchPartial | null);
}

export interface FundBatchResponse {
  'batch': (_mintrpc_VerboseBatch | null);
}
