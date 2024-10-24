// Original file: protos/lightning.proto


export interface CustomMessagePartial {
  'peer'?: (Buffer | Uint8Array | string);
  'type'?: (number);
  'data'?: (Buffer | Uint8Array | string);
}

export interface CustomMessage {
  'peer': (Buffer);
  'type': (number);
  'data': (Buffer);
}
