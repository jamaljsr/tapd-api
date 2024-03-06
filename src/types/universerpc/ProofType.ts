// Original file: protos/universe.proto

export const ProofType = {
  PROOF_TYPE_UNSPECIFIED: 'PROOF_TYPE_UNSPECIFIED',
  PROOF_TYPE_ISSUANCE: 'PROOF_TYPE_ISSUANCE',
  PROOF_TYPE_TRANSFER: 'PROOF_TYPE_TRANSFER',
} as const;

export type ProofTypePartial =
  | 'PROOF_TYPE_UNSPECIFIED'
  | 0
  | 'PROOF_TYPE_ISSUANCE'
  | 1
  | 'PROOF_TYPE_TRANSFER'
  | 2

export type ProofType = typeof ProofType[keyof typeof ProofType]
