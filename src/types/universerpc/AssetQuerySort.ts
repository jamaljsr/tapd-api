// Original file: protos/universe.proto

export const AssetQuerySort = {
  SORT_BY_NONE: 'SORT_BY_NONE',
  SORT_BY_ASSET_NAME: 'SORT_BY_ASSET_NAME',
  SORT_BY_ASSET_ID: 'SORT_BY_ASSET_ID',
  SORT_BY_ASSET_TYPE: 'SORT_BY_ASSET_TYPE',
  SORT_BY_TOTAL_SYNCS: 'SORT_BY_TOTAL_SYNCS',
  SORT_BY_TOTAL_PROOFS: 'SORT_BY_TOTAL_PROOFS',
  SORT_BY_GENESIS_HEIGHT: 'SORT_BY_GENESIS_HEIGHT',
  SORT_BY_TOTAL_SUPPLY: 'SORT_BY_TOTAL_SUPPLY',
} as const;

export type AssetQuerySortPartial =
  | 'SORT_BY_NONE'
  | 0
  | 'SORT_BY_ASSET_NAME'
  | 1
  | 'SORT_BY_ASSET_ID'
  | 2
  | 'SORT_BY_ASSET_TYPE'
  | 3
  | 'SORT_BY_TOTAL_SYNCS'
  | 4
  | 'SORT_BY_TOTAL_PROOFS'
  | 5
  | 'SORT_BY_GENESIS_HEIGHT'
  | 6
  | 'SORT_BY_TOTAL_SUPPLY'
  | 7

export type AssetQuerySort = typeof AssetQuerySort[keyof typeof AssetQuerySort]
