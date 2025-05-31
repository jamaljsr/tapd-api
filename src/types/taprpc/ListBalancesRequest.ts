// Original file: protos/taprootassets.proto

import type { ScriptKeyTypeQueryPartial as _taprpc_ScriptKeyTypeQueryPartial, ScriptKeyTypeQuery as _taprpc_ScriptKeyTypeQuery } from '../taprpc/ScriptKeyTypeQuery';

export interface ListBalancesRequestPartial {
  'assetId'?: (boolean);
  'groupKey'?: (boolean);
  'assetFilter'?: (Buffer | Uint8Array | string);
  'groupKeyFilter'?: (Buffer | Uint8Array | string);
  'includeLeased'?: (boolean);
  'scriptKeyType'?: (_taprpc_ScriptKeyTypeQueryPartial | null);
  'groupBy'?: "assetId"|"groupKey";
}

export interface ListBalancesRequest {
  'assetId'?: (boolean);
  'groupKey'?: (boolean);
  'assetFilter': (Buffer);
  'groupKeyFilter': (Buffer);
  'includeLeased': (boolean);
  'scriptKeyType': (_taprpc_ScriptKeyTypeQuery | null);
  'groupBy': "assetId"|"groupKey";
}
