// Original file: protos/lightning.proto


export interface MiddlewareRegistrationPartial {
  'middlewareName'?: (string);
  'customMacaroonCaveatName'?: (string);
  'readOnlyMode'?: (boolean);
}

export interface MiddlewareRegistration {
  'middlewareName': (string);
  'customMacaroonCaveatName': (string);
  'readOnlyMode': (boolean);
}
