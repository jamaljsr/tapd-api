// Original file: protos/universerpc/universe.proto

import type { AssetOutPointPartial as _taprpc_AssetOutPointPartial, AssetOutPoint as _taprpc_AssetOutPoint } from '../taprpc/AssetOutPoint';
import type { Long } from '@grpc/proto-loader';

export interface IgnoreAssetOutPointRequestPartial {
  'assetOutPoint'?: (_taprpc_AssetOutPointPartial | null);
  'amount'?: (number | string | Long);
}

export interface IgnoreAssetOutPointRequest {
  'assetOutPoint': (_taprpc_AssetOutPoint | null);
  'amount': (string);
}
