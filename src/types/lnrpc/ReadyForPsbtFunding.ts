// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ReadyForPsbtFundingPartial {
  'fundingAddress'?: (string);
  'fundingAmount'?: (number | string | Long);
  'psbt'?: (Buffer | Uint8Array | string);
}

export interface ReadyForPsbtFunding {
  'fundingAddress': (string);
  'fundingAmount': (string);
  'psbt': (Buffer);
}
