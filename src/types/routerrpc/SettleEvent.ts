// Original file: protos/routerrpc/router.proto


export interface SettleEventPartial {
  'preimage'?: (Buffer | Uint8Array | string);
}

export interface SettleEvent {
  'preimage': (Buffer);
}
