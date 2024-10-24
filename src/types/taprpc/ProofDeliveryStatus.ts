// Original file: protos/taprootassets.proto

export const ProofDeliveryStatus = {
  PROOF_DELIVERY_STATUS_NOT_APPLICABLE: 'PROOF_DELIVERY_STATUS_NOT_APPLICABLE',
  PROOF_DELIVERY_STATUS_COMPLETE: 'PROOF_DELIVERY_STATUS_COMPLETE',
  PROOF_DELIVERY_STATUS_PENDING: 'PROOF_DELIVERY_STATUS_PENDING',
} as const;

export type ProofDeliveryStatusPartial =
  | 'PROOF_DELIVERY_STATUS_NOT_APPLICABLE'
  | 0
  | 'PROOF_DELIVERY_STATUS_COMPLETE'
  | 1
  | 'PROOF_DELIVERY_STATUS_PENDING'
  | 2

export type ProofDeliveryStatus = typeof ProofDeliveryStatus[keyof typeof ProofDeliveryStatus]
