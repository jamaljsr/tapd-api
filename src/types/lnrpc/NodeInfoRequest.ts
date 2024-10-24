// Original file: protos/lightning.proto


export interface NodeInfoRequestPartial {
  'pubKey'?: (string);
  'includeChannels'?: (boolean);
}

export interface NodeInfoRequest {
  'pubKey': (string);
  'includeChannels': (boolean);
}
