// Original file: protos/lightning.proto


export interface ClosedChannelsRequestPartial {
  'cooperative'?: (boolean);
  'localForce'?: (boolean);
  'remoteForce'?: (boolean);
  'breach'?: (boolean);
  'fundingCanceled'?: (boolean);
  'abandoned'?: (boolean);
}

export interface ClosedChannelsRequest {
  'cooperative': (boolean);
  'localForce': (boolean);
  'remoteForce': (boolean);
  'breach': (boolean);
  'fundingCanceled': (boolean);
  'abandoned': (boolean);
}
