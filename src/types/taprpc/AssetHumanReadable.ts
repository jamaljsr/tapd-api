// Original file: protos/taprootassets.proto

import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { Long } from '@grpc/proto-loader';

export interface AssetHumanReadablePartial {
  'id'?: (Buffer | Uint8Array | string);
  'amount'?: (number | string | Long);
  'lockTime'?: (number);
  'relativeLockTime'?: (number);
  'tag'?: (string);
  'metaHash'?: (Buffer | Uint8Array | string);
  'type'?: (_taprpc_AssetTypePartial);
  'version'?: (_taprpc_AssetVersionPartial);
}

export interface AssetHumanReadable {
  'id': (Buffer);
  'amount': (string);
  'lockTime': (number);
  'relativeLockTime': (number);
  'tag': (string);
  'metaHash': (Buffer);
  'type': (_taprpc_AssetType);
  'version': (_taprpc_AssetVersion);
}
