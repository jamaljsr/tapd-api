// Original file: protos/universe.proto

export const AssetTypeFilter = {
  FILTER_ASSET_NONE: 'FILTER_ASSET_NONE',
  FILTER_ASSET_NORMAL: 'FILTER_ASSET_NORMAL',
  FILTER_ASSET_COLLECTIBLE: 'FILTER_ASSET_COLLECTIBLE',
} as const;

export type AssetTypeFilterPartial =
  | 'FILTER_ASSET_NONE'
  | 0
  | 'FILTER_ASSET_NORMAL'
  | 1
  | 'FILTER_ASSET_COLLECTIBLE'
  | 2

export type AssetTypeFilter = typeof AssetTypeFilter[keyof typeof AssetTypeFilter]
