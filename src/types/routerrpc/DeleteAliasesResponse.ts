// Original file: protos/routerrpc/router.proto

import type { AliasMapPartial as _lnrpc_AliasMapPartial, AliasMap as _lnrpc_AliasMap } from '../lnrpc/AliasMap';

export interface DeleteAliasesResponsePartial {
  'aliasMaps'?: (_lnrpc_AliasMapPartial)[];
}

export interface DeleteAliasesResponse {
  'aliasMaps': (_lnrpc_AliasMap)[];
}
