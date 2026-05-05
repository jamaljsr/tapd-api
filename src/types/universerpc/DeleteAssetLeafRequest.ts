// Original file: protos/universerpc/universe.proto

import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';

export interface DeleteAssetLeafRequestPartial {
  'key'?: (_universerpc_UniverseKeyPartial | null);
}

export interface DeleteAssetLeafRequest {
  'key': (_universerpc_UniverseKey | null);
}
