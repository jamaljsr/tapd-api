// Original file: protos/taprootassets.proto

import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';
import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';

export interface GenesisRevealPartial {
  'genesisBaseReveal'?: (_taprpc_GenesisInfoPartial | null);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
}

export interface GenesisReveal {
  'genesisBaseReveal': (_taprpc_GenesisInfo | null);
  'assetType': (keyof typeof _taprpc_AssetType);
}
