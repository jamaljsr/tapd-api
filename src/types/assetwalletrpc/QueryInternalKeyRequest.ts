// Original file: protos/assetwallet.proto


export interface QueryInternalKeyRequestPartial {
  'internalKey'?: (Buffer | Uint8Array | string);
}

export interface QueryInternalKeyRequest {
  'internalKey': (Buffer);
}
