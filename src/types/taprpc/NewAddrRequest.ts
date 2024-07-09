// Original file: protos/taprootassets.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';
import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';
import type { AssetVersionPartial as _taprpc_AssetVersionPartial, AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { AddrVersionPartial as _taprpc_AddrVersionPartial, AddrVersion as _taprpc_AddrVersion } from '../taprpc/AddrVersion';
import type { Long } from '@grpc/proto-loader';

export interface NewAddrRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'amt'?: (number | string | Long);
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
  'internalKey'?: (_taprpc_KeyDescriptorPartial | null);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'proofCourierAddr'?: (string);
  'assetVersion'?: (_taprpc_AssetVersionPartial);
  'addressVersion'?: (_taprpc_AddrVersionPartial);
}

export interface NewAddrRequest {
  'assetId': (Buffer);
  'amt': (string);
  'scriptKey': (_taprpc_ScriptKey | null);
  'internalKey': (_taprpc_KeyDescriptor | null);
  'tapscriptSibling': (Buffer);
  'proofCourierAddr': (string);
  'assetVersion': (_taprpc_AssetVersion);
  'addressVersion': (_taprpc_AddrVersion);
}
