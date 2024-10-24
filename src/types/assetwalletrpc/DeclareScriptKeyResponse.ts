// Original file: protos/assetwalletrpc/assetwallet.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';

export interface DeclareScriptKeyResponsePartial {
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
}

export interface DeclareScriptKeyResponse {
  'scriptKey': (_taprpc_ScriptKey | null);
}
