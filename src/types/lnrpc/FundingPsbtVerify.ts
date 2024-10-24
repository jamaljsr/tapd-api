// Original file: protos/lightning.proto


export interface FundingPsbtVerifyPartial {
  'fundedPsbt'?: (Buffer | Uint8Array | string);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'skipFinalize'?: (boolean);
}

export interface FundingPsbtVerify {
  'fundedPsbt': (Buffer);
  'pendingChanId': (Buffer);
  'skipFinalize': (boolean);
}
