// Original file: protos/taprootassets.proto

import type { AssetMetaTypePartial as _taprpc_AssetMetaTypePartial, AssetMetaType as _taprpc_AssetMetaType } from '../taprpc/AssetMetaType';

export interface FetchAssetMetaResponsePartial {
  'data'?: (Buffer | Uint8Array | string);
  'type'?: (_taprpc_AssetMetaTypePartial);
  'metaHash'?: (Buffer | Uint8Array | string);
  'unknownOddTypes'?: ({[key: number]: Buffer | Uint8Array | string});
  'decimalDisplay'?: (number);
  'universeCommitments'?: (boolean);
  'canonicalUniverseUrls'?: (string)[];
  'delegationKey'?: (Buffer | Uint8Array | string);
}

export interface FetchAssetMetaResponse {
  'data': (Buffer);
  'type': (_taprpc_AssetMetaType);
  'metaHash': (Buffer);
  'unknownOddTypes': ({[key: number]: Buffer});
  'decimalDisplay': (number);
  'universeCommitments': (boolean);
  'canonicalUniverseUrls': (string)[];
  'delegationKey': (Buffer);
}
