// Original file: protos/lightning.proto

import type { AliasMapPartial as _lnrpc_AliasMapPartial, AliasMap as _lnrpc_AliasMap } from '../lnrpc/AliasMap';

export interface ListAliasesResponsePartial {
  'aliasMaps'?: (_lnrpc_AliasMapPartial)[];
}

export interface ListAliasesResponse {
  'aliasMaps': (_lnrpc_AliasMap)[];
}
