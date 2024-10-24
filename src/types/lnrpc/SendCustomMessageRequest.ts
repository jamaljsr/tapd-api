// Original file: protos/lightning.proto


export interface SendCustomMessageRequestPartial {
  'peer'?: (Buffer | Uint8Array | string);
  'type'?: (number);
  'data'?: (Buffer | Uint8Array | string);
}

export interface SendCustomMessageRequest {
  'peer': (Buffer);
  'type': (number);
  'data': (Buffer);
}
