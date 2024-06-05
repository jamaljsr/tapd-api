// Original file: protos/taprootassets.proto

import type { AssetMetaTypePartial as _taprpc_AssetMetaTypePartial, AssetMetaType as _taprpc_AssetMetaType } from '../taprpc/AssetMetaType';

export interface AssetMetaPartial {
  'data'?: (Buffer | Uint8Array | string);
  'type'?: (_taprpc_AssetMetaTypePartial);
  'metaHash'?: (Buffer | Uint8Array | string);
}

export interface AssetMeta {
  'data': (Buffer);
  'type': (_taprpc_AssetMetaType);
  'metaHash': (Buffer);
}
