// Original file: protos/mint.proto

import type { TapscriptFullTreePartial as _taprpc_TapscriptFullTreePartial, TapscriptFullTree as _taprpc_TapscriptFullTree } from '../taprpc/TapscriptFullTree';
import type { TapBranchPartial as _taprpc_TapBranchPartial, TapBranch as _taprpc_TapBranch } from '../taprpc/TapBranch';

export interface FinalizeBatchRequestPartial {
  'shortResponse'?: (boolean);
  'feeRate'?: (number);
  'fullTree'?: (_taprpc_TapscriptFullTreePartial | null);
  'branch'?: (_taprpc_TapBranchPartial | null);
  'batchSibling'?: "fullTree"|"branch";
}

export interface FinalizeBatchRequest {
  'shortResponse': (boolean);
  'feeRate': (number);
  'fullTree'?: (_taprpc_TapscriptFullTree | null);
  'branch'?: (_taprpc_TapBranch | null);
  'batchSibling': "fullTree"|"branch";
}
