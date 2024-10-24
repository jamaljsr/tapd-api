// Original file: protos/assetwalletrpc/assetwallet.proto


export interface VerifyAssetOwnershipRequestPartial {
  'proofWithWitness'?: (Buffer | Uint8Array | string);
  'challenge'?: (Buffer | Uint8Array | string);
}

export interface VerifyAssetOwnershipRequest {
  'proofWithWitness': (Buffer);
  'challenge': (Buffer);
}
