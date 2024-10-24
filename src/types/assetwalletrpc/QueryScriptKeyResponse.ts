// Original file: protos/assetwalletrpc/assetwallet.proto

import type { ScriptKeyPartial as _taprpc_ScriptKeyPartial, ScriptKey as _taprpc_ScriptKey } from '../taprpc/ScriptKey';

export interface QueryScriptKeyResponsePartial {
  'scriptKey'?: (_taprpc_ScriptKeyPartial | null);
}

export interface QueryScriptKeyResponse {
  'scriptKey': (_taprpc_ScriptKey | null);
}
