// Original file: protos/lightning.proto


export interface SignMessageRequestPartial {
  'msg'?: (Buffer | Uint8Array | string);
  'singleHash'?: (boolean);
}

export interface SignMessageRequest {
  'msg': (Buffer);
  'singleHash': (boolean);
}
