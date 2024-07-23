// Original file: protos/universe.proto

import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';

export interface PushProofResponsePartial {
  'key'?: (_universerpc_UniverseKeyPartial | null);
}

export interface PushProofResponse {
  'key': (_universerpc_UniverseKey | null);
}
