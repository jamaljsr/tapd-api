// Original file: protos/lightning.proto


export interface SendOnionMessageRequestPartial {
  'peer'?: (Buffer | Uint8Array | string);
  'pathKey'?: (Buffer | Uint8Array | string);
  'onion'?: (Buffer | Uint8Array | string);
}

export interface SendOnionMessageRequest {
  'peer': (Buffer);
  'pathKey': (Buffer);
  'onion': (Buffer);
}
