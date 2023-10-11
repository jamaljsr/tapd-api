// Original file: protos/taprootassets.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';
import type { KeyDescriptorPartial as _taprpc_KeyDescriptorPartial, KeyDescriptor as _taprpc_KeyDescriptor } from '../taprpc/KeyDescriptor';
import type { AssetVersion as _taprpc_AssetVersion } from '../taprpc/AssetVersion';
import type { Long } from '@grpc/proto-loader';

export interface NewAddrRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'amt'?: (number | string | Long);
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
  'internalKey'?: (_taprpc_KeyDescriptorPartial | null);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'proofCourierAddr'?: (string);
  'assetVersion'?: (_taprpc_AssetVersion | keyof typeof _taprpc_AssetVersion);
}

export interface NewAddrRequest {
  'assetId': (Buffer);
  'amt': (string);
  'scriptKey': (_taprpc_ScriptKey | null);
  'internalKey': (_taprpc_KeyDescriptor | null);
  'tapscriptSibling': (Buffer);
  'proofCourierAddr': (string);
  'assetVersion': (keyof typeof _taprpc_AssetVersion);
}
