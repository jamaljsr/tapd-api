// Original file: protos/taprootassets.proto

export const AssetMetaType = {
  META_TYPE_OPAQUE: 'META_TYPE_OPAQUE',
} as const;

export type AssetMetaTypePartial =
  | 'META_TYPE_OPAQUE'
  | 0

export type AssetMetaType = typeof AssetMetaType[keyof typeof AssetMetaType]
