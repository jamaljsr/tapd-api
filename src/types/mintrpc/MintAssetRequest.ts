// Original file: protos/mint.proto

import type { MintAssetPartial as _mintrpc_MintAssetPartial, MintAsset as _mintrpc_MintAsset } from '../mintrpc/MintAsset';

export interface MintAssetRequestPartial {
  'asset'?: (_mintrpc_MintAssetPartial | null);
  'shortResponse'?: (boolean);
}

export interface MintAssetRequest {
  'asset': (_mintrpc_MintAsset | null);
  'shortResponse': (boolean);
}
