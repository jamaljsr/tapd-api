// Original file: protos/taprootassets.proto

import type { ScriptKeyTypeQueryPartial as _taprpc_ScriptKeyTypeQueryPartial, ScriptKeyTypeQuery as _taprpc_ScriptKeyTypeQuery } from '../taprpc/ScriptKeyTypeQuery';

export interface ListUtxosRequestPartial {
  'includeLeased'?: (boolean);
  'scriptKeyType'?: (_taprpc_ScriptKeyTypeQueryPartial | null);
}

export interface ListUtxosRequest {
  'includeLeased': (boolean);
  'scriptKeyType': (_taprpc_ScriptKeyTypeQuery | null);
}
