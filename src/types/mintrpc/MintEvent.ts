// Original file: protos/mintrpc/mint.proto

import type { BatchStatePartial as _mintrpc_BatchStatePartial, BatchState as _mintrpc_BatchState } from '../mintrpc/BatchState';
import type { MintingBatchPartial as _mintrpc_MintingBatchPartial, MintingBatch as _mintrpc_MintingBatch } from '../mintrpc/MintingBatch';
import type { Long } from '@grpc/proto-loader';

export interface MintEventPartial {
  'timestamp'?: (number | string | Long);
  'batchState'?: (_mintrpc_BatchStatePartial);
  'batch'?: (_mintrpc_MintingBatchPartial | null);
  'error'?: (string);
}

export interface MintEvent {
  'timestamp': (string);
  'batchState': (_mintrpc_BatchState);
  'batch': (_mintrpc_MintingBatch | null);
  'error': (string);
}
