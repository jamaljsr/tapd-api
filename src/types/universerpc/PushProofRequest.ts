// Original file: protos/universe.proto

import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';
import type { UniverseFederationServerPartial as _universerpc_UniverseFederationServerPartial, UniverseFederationServer as _universerpc_UniverseFederationServer } from '../universerpc/UniverseFederationServer';

export interface PushProofRequestPartial {
  'key'?: (_universerpc_UniverseKeyPartial | null);
  'server'?: (_universerpc_UniverseFederationServerPartial | null);
}

export interface PushProofRequest {
  'key': (_universerpc_UniverseKey | null);
  'server': (_universerpc_UniverseFederationServer | null);
}
