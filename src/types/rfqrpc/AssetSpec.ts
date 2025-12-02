// Original file: protos/rfqrpc/rfq.proto


export interface AssetSpecPartial {
  'id'?: (Buffer | Uint8Array | string);
  'groupPubKey'?: (Buffer | Uint8Array | string);
}

export interface AssetSpec {
  'id': (Buffer);
  'groupPubKey': (Buffer);
}
