// Original file: protos/taprootassets.proto

import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';

export interface GenesisInfoPartial {
  'genesisPoint'?: (string);
  'name'?: (string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'assetId'?: (Buffer | Uint8Array | string);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'outputIndex'?: (number);
  'version'?: (number);
}

export interface GenesisInfo {
  'genesisPoint': (string);
  'name': (string);
  'metaHash': (Buffer);
  'assetId': (Buffer);
  'assetType': (keyof typeof _taprpc_AssetType);
  'outputIndex': (number);
  'version': (number);
}
