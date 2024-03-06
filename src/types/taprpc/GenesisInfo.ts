// Original file: protos/taprootassets.proto

import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';

export interface GenesisInfoPartial {
  'genesisPoint'?: (string);
  'name'?: (string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'assetId'?: (Buffer | Uint8Array | string);
  'assetType'?: (_taprpc_AssetTypePartial);
  'outputIndex'?: (number);
  'version'?: (number);
}

export interface GenesisInfo {
  'genesisPoint': (string);
  'name': (string);
  'metaHash': (Buffer);
  'assetId': (Buffer);
  'assetType': (_taprpc_AssetType);
  'outputIndex': (number);
  'version': (number);
}
