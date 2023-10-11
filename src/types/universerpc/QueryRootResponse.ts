// Original file: protos/universe.proto

import type { UniverseRootPartial as _universerpc_UniverseRootPartial, UniverseRoot as _universerpc_UniverseRoot } from '../universerpc/UniverseRoot';

export interface QueryRootResponsePartial {
  'issuanceRoot'?: (_universerpc_UniverseRootPartial | null);
  'transferRoot'?: (_universerpc_UniverseRootPartial | null);
}

export interface QueryRootResponse {
  'issuanceRoot': (_universerpc_UniverseRoot | null);
  'transferRoot': (_universerpc_UniverseRoot | null);
}
