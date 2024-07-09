// Original file: protos/mint.proto

import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';
import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';
import type { Long } from '@grpc/proto-loader';

export interface MintAssetPartial {
  'assetVersion'?: (_taprpc_AssetVersionPartial);
  'assetType'?: (_taprpc_AssetTypePartial);
  'name'?: (string);
  'assetMeta'?: (_taprpc_AssetMetaPartial | null);
  'amount'?: (number | string | Long);
  'newGroupedAsset'?: (boolean);
  'groupedAsset'?: (boolean);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupAnchor'?: (string);
  'groupInternalKey'?: (_taprpc_KeyDescriptorPartial | null);
  'groupTapscriptRoot'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
  'decimalDisplay'?: (number);
}

export interface MintAsset {
  'assetVersion': (_taprpc_AssetVersion);
  'assetType': (_taprpc_AssetType);
  'name': (string);
  'assetMeta': (_taprpc_AssetMeta | null);
  'amount': (string);
  'newGroupedAsset': (boolean);
  'groupedAsset': (boolean);
  'groupKey': (Buffer);
  'groupAnchor': (string);
  'groupInternalKey': (_taprpc_KeyDescriptor | null);
  'groupTapscriptRoot': (Buffer);
  'scriptKey': (_taprpc_ScriptKey | null);
  'decimalDisplay': (number);
}
