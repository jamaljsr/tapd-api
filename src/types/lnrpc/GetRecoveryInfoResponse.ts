// Original file: protos/lightning.proto


export interface GetRecoveryInfoResponsePartial {
  'recoveryMode'?: (boolean);
  'recoveryFinished'?: (boolean);
  'progress'?: (number | string);
}

export interface GetRecoveryInfoResponse {
  'recoveryMode': (boolean);
  'recoveryFinished': (boolean);
  'progress': (number);
}
