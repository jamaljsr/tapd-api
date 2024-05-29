// Original file: protos/taprootassets.proto

import type { TapLeafPartial as _taprpc_TapLeafPartial, TapLeaf as _taprpc_TapLeaf } from '../taprpc/TapLeaf';

export interface TapscriptFullTreePartial {
  'allLeaves'?: (_taprpc_TapLeafPartial)[];
}

export interface TapscriptFullTree {
  'allLeaves': (_taprpc_TapLeaf)[];
}
