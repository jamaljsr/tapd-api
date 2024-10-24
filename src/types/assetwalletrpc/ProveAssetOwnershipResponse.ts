// Original file: protos/assetwalletrpc/assetwallet.proto


export interface ProveAssetOwnershipResponsePartial {
  'proofWithWitness'?: (Buffer | Uint8Array | string);
}

export interface ProveAssetOwnershipResponse {
  'proofWithWitness': (Buffer);
}
