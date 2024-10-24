// Original file: protos/assetwalletrpc/assetwallet.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';

export interface DeclareScriptKeyRequestPartial {
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
}

export interface DeclareScriptKeyRequest {
  'scriptKey': (_taprpc_ScriptKey | null);
}
