// Original file: protos/taprootassets.proto

export const AssetVersion = {
  ASSET_VERSION_V0: 'ASSET_VERSION_V0',
  ASSET_VERSION_V1: 'ASSET_VERSION_V1',
} as const;

export type AssetVersionPartial =
  | 'ASSET_VERSION_V0'
  | 0
  | 'ASSET_VERSION_V1'
  | 1

export type AssetVersion = typeof AssetVersion[keyof typeof AssetVersion]
