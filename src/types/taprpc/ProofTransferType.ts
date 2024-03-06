// Original file: protos/taprootassets.proto

export const ProofTransferType = {
  PROOF_TRANSFER_TYPE_SEND: 'PROOF_TRANSFER_TYPE_SEND',
  PROOF_TRANSFER_TYPE_RECEIVE: 'PROOF_TRANSFER_TYPE_RECEIVE',
} as const;

export type ProofTransferTypePartial =
  | 'PROOF_TRANSFER_TYPE_SEND'
  | 0
  | 'PROOF_TRANSFER_TYPE_RECEIVE'
  | 1

export type ProofTransferType = typeof ProofTransferType[keyof typeof ProofTransferType]
