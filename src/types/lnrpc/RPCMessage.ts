// Original file: protos/lightning.proto


export interface RPCMessagePartial {
  'methodFullUri'?: (string);
  'streamRpc'?: (boolean);
  'typeName'?: (string);
  'serialized'?: (Buffer | Uint8Array | string);
  'isError'?: (boolean);
}

export interface RPCMessage {
  'methodFullUri': (string);
  'streamRpc': (boolean);
  'typeName': (string);
  'serialized': (Buffer);
  'isError': (boolean);
}
