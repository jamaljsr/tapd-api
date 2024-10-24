// Original file: protos/universerpc/universe.proto

import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { Long } from '@grpc/proto-loader';

export interface AssetStatsAssetPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'genesisPoint'?: (string);
  'totalSupply'?: (number | string | Long);
  'assetName'?: (string);
  'assetType'?: (_taprpc_AssetTypePartial);
  'genesisHeight'?: (number);
  'genesisTimestamp'?: (number | string | Long);
  'anchorPoint'?: (string);
}

export interface AssetStatsAsset {
  'assetId': (Buffer);
  'genesisPoint': (string);
  'totalSupply': (string);
  'assetName': (string);
  'assetType': (_taprpc_AssetType);
  'genesisHeight': (number);
  'genesisTimestamp': (string);
  'anchorPoint': (string);
}
