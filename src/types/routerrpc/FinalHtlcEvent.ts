// Original file: protos/routerrpc/router.proto


export interface FinalHtlcEventPartial {
  'settled'?: (boolean);
  'offchain'?: (boolean);
}

export interface FinalHtlcEvent {
  'settled': (boolean);
  'offchain': (boolean);
}
