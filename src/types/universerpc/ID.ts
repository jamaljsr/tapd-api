// Original file: protos/universe.proto

import type { ProofTypePartial as _universerpc_ProofTypePartial, ProofType as _universerpc_ProofType } from '../universerpc/ProofType';

export interface IDPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetIdStr'?: (string);
  'groupKey'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'proofType'?: (_universerpc_ProofTypePartial);
  'id'?: "assetId"|"assetIdStr"|"groupKey"|"groupKeyStr";
}

export interface ID {
  'assetId'?: (Buffer);
  'assetIdStr'?: (string);
  'groupKey'?: (Buffer);
  'groupKeyStr'?: (string);
  'proofType': (_universerpc_ProofType);
  'id': "assetId"|"assetIdStr"|"groupKey"|"groupKeyStr";
}
