// Original file: protos/taprootassets.proto

import type { AssetBurnPartial as _taprpc_AssetBurnPartial, AssetBurn as _taprpc_AssetBurn } from '../taprpc/AssetBurn';

export interface ListBurnsResponsePartial {
  'burns'?: (_taprpc_AssetBurnPartial)[];
}

export interface ListBurnsResponse {
  'burns': (_taprpc_AssetBurn)[];
}
