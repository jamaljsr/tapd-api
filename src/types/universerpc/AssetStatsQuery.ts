// Original file: protos/universe.proto

import type { AssetTypeFilter as _universerpc_AssetTypeFilter } from '../universerpc/AssetTypeFilter';
import type { AssetQuerySort as _universerpc_AssetQuerySort } from '../universerpc/AssetQuerySort';
import type { SortDirection as _universerpc_SortDirection } from '../universerpc/SortDirection';

export interface AssetStatsQueryPartial {
  'assetNameFilter'?: (string);
  'assetIdFilter'?: (Buffer | Uint8Array | string);
  'assetTypeFilter'?: (_universerpc_AssetTypeFilter | keyof typeof _universerpc_AssetTypeFilter);
  'sortBy'?: (_universerpc_AssetQuerySort | keyof typeof _universerpc_AssetQuerySort);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_universerpc_SortDirection | keyof typeof _universerpc_SortDirection);
}

export interface AssetStatsQuery {
  'assetNameFilter': (string);
  'assetIdFilter': (Buffer);
  'assetTypeFilter': (keyof typeof _universerpc_AssetTypeFilter);
  'sortBy': (keyof typeof _universerpc_AssetQuerySort);
  'offset': (number);
  'limit': (number);
  'direction': (keyof typeof _universerpc_SortDirection);
}
