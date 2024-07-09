// Original file: protos/taprootassets.proto

import type { AssetTypePartial as _taprpc_AssetTypePartial, AssetType as _taprpc_AssetType } from '../taprpc/AssetType';
import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { AddrVersionPartial as _taprpc_AddrVersionPartial, AddrVersion as _taprpc_AddrVersion } from '../taprpc/AddrVersion';
import type { Long } from '@grpc/proto-loader';

export interface AddrPartial {
  'encoded'?: (string);
  'assetId'?: (Buffer | Uint8Array | string);
  'assetType'?: (_taprpc_AssetTypePartial);
  'amount'?: (number | string | Long);
  'groupKey'?: (Buffer | Uint8Array | string);
  'scriptKey'?: (Buffer | Uint8Array | string);
  'internalKey'?: (Buffer | Uint8Array | string);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'taprootOutputKey'?: (Buffer | Uint8Array | string);
  'proofCourierAddr'?: (string);
  'assetVersion'?: (_taprpc_AssetVersionPartial);
  'addressVersion'?: (_taprpc_AddrVersionPartial);
}

export interface Addr {
  'encoded': (string);
  'assetId': (Buffer);
  'assetType': (_taprpc_AssetType);
  'amount': (string);
  'groupKey': (Buffer);
  'scriptKey': (Buffer);
  'internalKey': (Buffer);
  'tapscriptSibling': (Buffer);
  'taprootOutputKey': (Buffer);
  'proofCourierAddr': (string);
  'assetVersion': (_taprpc_AssetVersion);
  'addressVersion': (_taprpc_AddrVersion);
}
