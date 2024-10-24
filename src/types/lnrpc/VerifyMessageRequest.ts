// Original file: protos/lightning.proto


export interface VerifyMessageRequestPartial {
  'msg'?: (Buffer | Uint8Array | string);
  'signature'?: (string);
}

export interface VerifyMessageRequest {
  'msg': (Buffer);
  'signature': (string);
}
