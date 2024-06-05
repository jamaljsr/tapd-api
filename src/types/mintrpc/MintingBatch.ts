// Original file: protos/mint.proto

import type { BatchState as _mintrpc_BatchState } from '../mintrpc/BatchState';
import type { PendingAssetPartial as _mintrpc_PendingAssetPartial, PendingAsset as _mintrpc_PendingAsset } from '../mintrpc/PendingAsset';
import type { Long } from '@grpc/proto-loader';

export interface MintingBatchPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
  'batchTxid'?: (string);
  'state'?: (_mintrpc_BatchState | keyof typeof _mintrpc_BatchState);
  'assets'?: (_mintrpc_PendingAssetPartial)[];
  'createdAt'?: (number | string | Long);
  'heightHint'?: (number);
  'batchPsbt'?: (Buffer | Uint8Array | string);
}

export interface MintingBatch {
  'batchKey': (Buffer);
  'batchTxid': (string);
  'state': (keyof typeof _mintrpc_BatchState);
  'assets': (_mintrpc_PendingAsset)[];
  'createdAt': (string);
  'heightHint': (number);
  'batchPsbt': (Buffer);
}
