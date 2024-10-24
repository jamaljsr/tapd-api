// Original file: protos/mintrpc/mint.proto

import type { VerboseBatchPartial as _mintrpc_VerboseBatchPartial, VerboseBatch as _mintrpc_VerboseBatch } from '../mintrpc/VerboseBatch';

export interface ListBatchResponsePartial {
  'batches'?: (_mintrpc_VerboseBatchPartial)[];
}

export interface ListBatchResponse {
  'batches': (_mintrpc_VerboseBatch)[];
}
