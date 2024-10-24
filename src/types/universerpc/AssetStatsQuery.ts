// Original file: protos/universerpc/universe.proto

import type { AssetTypeFilterPartial as _universerpc_AssetTypeFilterPartial, AssetTypeFilter as _universerpc_AssetTypeFilter } from '../universerpc/AssetTypeFilter';
import type { AssetQuerySortPartial as _universerpc_AssetQuerySortPartial, AssetQuerySort as _universerpc_AssetQuerySort } from '../universerpc/AssetQuerySort';
import type { SortDirectionPartial as _universerpc_SortDirectionPartial, SortDirection as _universerpc_SortDirection } from '../universerpc/SortDirection';

export interface AssetStatsQueryPartial {
  'assetNameFilter'?: (string);
  'assetIdFilter'?: (Buffer | Uint8Array | string);
  'assetTypeFilter'?: (_universerpc_AssetTypeFilterPartial);
  'sortBy'?: (_universerpc_AssetQuerySortPartial);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_universerpc_SortDirectionPartial);
}

export interface AssetStatsQuery {
  'assetNameFilter': (string);
  'assetIdFilter': (Buffer);
  'assetTypeFilter': (_universerpc_AssetTypeFilter);
  'sortBy': (_universerpc_AssetQuerySort);
  'offset': (number);
  'limit': (number);
  'direction': (_universerpc_SortDirection);
}
