// Original file: protos/universe.proto

import type { AssetStatsAssetPartial as _universerpc_AssetStatsAssetPartial, AssetStatsAsset as _universerpc_AssetStatsAsset } from '../universerpc/AssetStatsAsset';
import type { Long } from '@grpc/proto-loader';

export interface AssetStatsSnapshotPartial {
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupSupply'?: (number | string | Long);
  'groupAnchor'?: (_universerpc_AssetStatsAssetPartial | null);
  'asset'?: (_universerpc_AssetStatsAssetPartial | null);
  'totalSyncs'?: (number | string | Long);
  'totalProofs'?: (number | string | Long);
}

export interface AssetStatsSnapshot {
  'groupKey': (Buffer);
  'groupSupply': (string);
  'groupAnchor': (_universerpc_AssetStatsAsset | null);
  'asset': (_universerpc_AssetStatsAsset | null);
  'totalSyncs': (string);
  'totalProofs': (string);
}
