// Original file: protos/lightning.proto


export interface FundingShimCancelPartial {
  'pendingChanId'?: (Buffer | Uint8Array | string);
}

export interface FundingShimCancel {
  'pendingChanId': (Buffer);
}
