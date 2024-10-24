// Original file: protos/lightning.proto


export interface InboundFeePartial {
  'baseFeeMsat'?: (number);
  'feeRatePpm'?: (number);
}

export interface InboundFee {
  'baseFeeMsat': (number);
  'feeRatePpm': (number);
}
