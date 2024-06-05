// Original file: protos/universe.proto

import type { ProofType as _universerpc_ProofType } from '../universerpc/ProofType';
import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';

export interface MultiverseRootRequestPartial {
  'proofType'?: (_universerpc_ProofType | keyof typeof _universerpc_ProofType);
  'specificIds'?: (_universerpc_IDPartial)[];
}

export interface MultiverseRootRequest {
  'proofType': (keyof typeof _universerpc_ProofType);
  'specificIds': (_universerpc_ID)[];
}
