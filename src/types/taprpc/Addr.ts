// Original file: protos/taprootassets.proto

import type { AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { Long } from '@grpc/proto-loader';

export interface AddrPartial {
  'encoded'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'assetType'?: (_taprpc_AssetType | keyof typeof _taprpc_AssetType);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'internalKey'?: (Buffer | Uint8Array | string);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'taprootOutputKey'?: (Buffer | Uint8Array | string);
  'proofCourierAddr'?: (string);
  'assetVersion'?: (_taprpc_AssetVersion | keyof typeof _taprpc_AssetVersion);
}

export interface Addr {
  'encoded': (string);
  'assetId': (Buffer);
  'assetType': (keyof typeof _taprpc_AssetType);
  'amount': (string);
  'groupKey': (Buffer);
  'scriptKey': (Buffer);
  'internalKey': (Buffer);
  'tapscriptSibling': (Buffer);
  'taprootOutputKey': (Buffer);
  'proofCourierAddr': (string);
  'assetVersion': (keyof typeof _taprpc_AssetVersion);
}
