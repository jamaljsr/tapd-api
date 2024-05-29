// Original file: protos/assetwallet.proto


export interface QueryScriptKeyRequestPartial {
  'tweakedScriptKey'?: (Buffer | Uint8Array | string);
}

export interface QueryScriptKeyRequest {
  'tweakedScriptKey': (Buffer);
}
