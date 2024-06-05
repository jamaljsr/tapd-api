// Original file: protos/universe.proto

import type { ProofTypePartial as _universerpc_ProofTypePartial, ProofType as _universerpc_ProofType } from '../universerpc/ProofType';
import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';

export interface MultiverseRootRequestPartial {
  'proofType'?: (_universerpc_ProofTypePartial);
  'specificIds'?: (_universerpc_IDPartial)[];
}

export interface MultiverseRootRequest {
  'proofType': (_universerpc_ProofType);
  'specificIds': (_universerpc_ID)[];
}
