// Original file: protos/mint.proto

import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { Long } from '@grpc/proto-loader';

export interface PendingAssetPartial {
  'assetVersion'?: (_taprpc_AssetVersionPartial);
  'assetType'?: (_taprpc_AssetTypePartial);
  'name'?: (string);
  'assetMeta'?: (_taprpc_AssetMetaPartial | null);
  'amount'?: (number | string | Long);
  'newGroupedAsset'?: (boolean);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupAnchor'?: (string);
}

export interface PendingAsset {
  'assetVersion': (_taprpc_AssetVersion);
  'assetType': (_taprpc_AssetType);
  'name': (string);
  'assetMeta': (_taprpc_AssetMeta | null);
  'amount': (string);
  'newGroupedAsset': (boolean);
  'groupKey': (Buffer);
  'groupAnchor': (string);
}
