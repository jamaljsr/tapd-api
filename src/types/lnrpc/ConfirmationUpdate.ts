// Original file: protos/lightning.proto


export interface ConfirmationUpdatePartial {
  'blockSha'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
  'numConfsLeft'?: (number);
}

export interface ConfirmationUpdate {
  'blockSha': (Buffer);
  'blockHeight': (number);
  'numConfsLeft': (number);
}
