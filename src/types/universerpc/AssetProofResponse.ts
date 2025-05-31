// Original file: protos/universerpc/universe.proto

import type { UniverseKeyPartial as _universerpc_UniverseKeyPartial, UniverseKey as _universerpc_UniverseKey } from '../universerpc/UniverseKey';
import type { UniverseRootPartial as _universerpc_UniverseRootPartial, UniverseRoot as _universerpc_UniverseRoot } from '../universerpc/UniverseRoot';
import type { AssetLeafPartial as _universerpc_AssetLeafPartial, AssetLeaf as _universerpc_AssetLeaf } from '../universerpc/AssetLeaf';
import type { MerkleSumNodePartial as _universerpc_MerkleSumNodePartial, MerkleSumNode as _universerpc_MerkleSumNode } from '../universerpc/MerkleSumNode';
import type { IssuanceDataPartial as _universerpc_IssuanceDataPartial, IssuanceData as _universerpc_IssuanceData } from '../universerpc/IssuanceData';

export interface AssetProofResponsePartial {
  'req'?: (_universerpc_UniverseKeyPartial | null);
  'universeRoot'?: (_universerpc_UniverseRootPartial | null);
  'universeInclusionProof'?: (Buffer | Uint8Array | string);
  'assetLeaf'?: (_universerpc_AssetLeafPartial | null);
  'multiverseRoot'?: (_universerpc_MerkleSumNodePartial | null);
  'multiverseInclusionProof'?: (Buffer | Uint8Array | string);
  'issuanceData'?: (_universerpc_IssuanceDataPartial | null);
}

export interface AssetProofResponse {
  'req': (_universerpc_UniverseKey | null);
  'universeRoot': (_universerpc_UniverseRoot | null);
  'universeInclusionProof': (Buffer);
  'assetLeaf': (_universerpc_AssetLeaf | null);
  'multiverseRoot': (_universerpc_MerkleSumNode | null);
  'multiverseInclusionProof': (Buffer);
  'issuanceData': (_universerpc_IssuanceData | null);
}
