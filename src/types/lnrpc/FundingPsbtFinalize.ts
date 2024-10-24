// Original file: protos/lightning.proto


export interface FundingPsbtFinalizePartial {
  'signedPsbt'?: (Buffer | Uint8Array | string);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'finalRawTx'?: (Buffer | Uint8Array | string);
}

export interface FundingPsbtFinalize {
  'signedPsbt': (Buffer);
  'pendingChanId': (Buffer);
  'finalRawTx': (Buffer);
}
