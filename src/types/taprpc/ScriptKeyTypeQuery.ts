// Original file: protos/taprootassets.proto

import type { ScriptKeyTypePartial as _taprpc_ScriptKeyTypePartial, ScriptKeyType as _taprpc_ScriptKeyType } from '../taprpc/ScriptKeyType';

export interface ScriptKeyTypeQueryPartial {
  'explicitType'?: (_taprpc_ScriptKeyTypePartial);
  'allTypes'?: (boolean);
  'type'?: "explicitType"|"allTypes";
}

export interface ScriptKeyTypeQuery {
  'explicitType'?: (_taprpc_ScriptKeyType);
  'allTypes'?: (boolean);
  'type': "explicitType"|"allTypes";
}
