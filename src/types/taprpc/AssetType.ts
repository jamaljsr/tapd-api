// Original file: protos/taprootassets.proto

export const AssetType = {
  NORMAL: 'NORMAL',
  COLLECTIBLE: 'COLLECTIBLE',
} as const;

export type AssetTypePartial =
  | 'NORMAL'
  | 0
  | 'COLLECTIBLE'
  | 1

export type AssetType = typeof AssetType[keyof typeof AssetType]
