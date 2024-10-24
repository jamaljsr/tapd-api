// Original file: protos/mintrpc/mint.proto

import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';

export interface FundBatchResponsePartial {
  'batch'?: (_mintrpc_MintingBatchPartial | null);
}

export interface FundBatchResponse {
  'batch': (_mintrpc_MintingBatch | null);
}
