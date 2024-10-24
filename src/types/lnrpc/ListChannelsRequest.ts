// Original file: protos/lightning.proto


export interface ListChannelsRequestPartial {
  'activeOnly'?: (boolean);
  'inactiveOnly'?: (boolean);
  'publicOnly'?: (boolean);
  'privateOnly'?: (boolean);
  'peer'?: (Buffer | Uint8Array | string);
  'peerAliasLookup'?: (boolean);
}

export interface ListChannelsRequest {
  'activeOnly': (boolean);
  'inactiveOnly': (boolean);
  'publicOnly': (boolean);
  'privateOnly': (boolean);
  'peer': (Buffer);
  'peerAliasLookup': (boolean);
}
