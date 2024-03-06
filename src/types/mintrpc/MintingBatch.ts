// Original file: protos/mint.proto

import type { BatchStatePartial as _mintrpc_BatchStatePartial, BatchState as _mintrpc_BatchState } from '../mintrpc/BatchState';
import type { PendingAssetPartial as _mintrpc_PendingAssetPartial, PendingAsset as _mintrpc_PendingAsset } from '../mintrpc/PendingAsset';

export interface MintingBatchPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
  'batchTxid'?: (string);
  'state'?: (_mintrpc_BatchStatePartial);
  'assets'?: (_mintrpc_PendingAssetPartial)[];
}

export interface MintingBatch {
  'batchKey': (Buffer);
  'batchTxid': (string);
  'state': (_mintrpc_BatchState);
  'assets': (_mintrpc_PendingAsset)[];
}
