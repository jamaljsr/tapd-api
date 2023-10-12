// Original file: protos/mint.proto

import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';

export interface FinalizeBatchResponsePartial {
  'batch'?: (_mintrpc_MintingBatchPartial | null);
}

export interface FinalizeBatchResponse {
  'batch': (_mintrpc_MintingBatch | null);
}
