// Original file: protos/mint.proto

import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';
import type { UnsealedAssetPartial as _mintrpc_UnsealedAssetPartial, UnsealedAsset as _mintrpc_UnsealedAsset } from '../mintrpc/UnsealedAsset';

export interface VerboseBatchPartial {
  'batch'?: (_mintrpc_MintingBatchPartial | null);
  'unsealedAssets'?: (_mintrpc_UnsealedAssetPartial)[];
}

export interface VerboseBatch {
  'batch': (_mintrpc_MintingBatch | null);
  'unsealedAssets': (_mintrpc_UnsealedAsset)[];
}
