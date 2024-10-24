// Original file: protos/mintrpc/mint.proto

import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';

export interface SealBatchResponsePartial {
  'batch'?: (_mintrpc_MintingBatchPartial | null);
}

export interface SealBatchResponse {
  'batch': (_mintrpc_MintingBatch | null);
}
