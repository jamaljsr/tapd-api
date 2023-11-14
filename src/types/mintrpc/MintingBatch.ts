// Original file: protos/mint.proto

import type { BatchState as _mintrpc_BatchState } from '../mintrpc/BatchState';
import type { MintAssetPartial as _mintrpc_MintAssetPartial, MintAsset as _mintrpc_MintAsset } from '../mintrpc/MintAsset';

export interface MintingBatchPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
  'batchTxid'?: (string);
  'state'?: (_mintrpc_BatchState | keyof typeof _mintrpc_BatchState);
  'assets'?: (_mintrpc_MintAssetPartial)[];
}

export interface MintingBatch {
  'batchKey': (Buffer);
  'batchTxid': (string);
  'state': (keyof typeof _mintrpc_BatchState);
  'assets': (_mintrpc_MintAsset)[];
}
