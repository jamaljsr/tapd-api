// Original file: protos/lightning.proto


export interface ChannelAuthProofPartial {
  'nodeSig1'?: (Buffer | Uint8Array | string);
  'bitcoinSig1'?: (Buffer | Uint8Array | string);
  'nodeSig2'?: (Buffer | Uint8Array | string);
  'bitcoinSig2'?: (Buffer | Uint8Array | string);
}

export interface ChannelAuthProof {
  'nodeSig1': (Buffer);
  'bitcoinSig1': (Buffer);
  'nodeSig2': (Buffer);
  'bitcoinSig2': (Buffer);
}
