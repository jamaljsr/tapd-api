// Original file: protos/taprootassets.proto

export const AssetMetaType = {
  META_TYPE_OPAQUE: 'META_TYPE_OPAQUE',
  META_TYPE_JSON: 'META_TYPE_JSON',
} as const;

export type AssetMetaTypePartial =
  | 'META_TYPE_OPAQUE'
  | 0
  | 'META_TYPE_JSON'
  | 1

export type AssetMetaType = typeof AssetMetaType[keyof typeof AssetMetaType]
