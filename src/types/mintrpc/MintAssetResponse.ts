// Original file: protos/mint.proto

import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';

export interface MintAssetResponsePartial {
  'pendingBatch'?: (_mintrpc_MintingBatchPartial | null);
}

export interface MintAssetResponse {
  'pendingBatch': (_mintrpc_MintingBatch | null);
}
