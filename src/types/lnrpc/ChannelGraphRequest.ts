// Original file: protos/lightning.proto


export interface ChannelGraphRequestPartial {
  'includeUnannounced'?: (boolean);
  'includeAuthProof'?: (boolean);
}

export interface ChannelGraphRequest {
  'includeUnannounced': (boolean);
  'includeAuthProof': (boolean);
}
