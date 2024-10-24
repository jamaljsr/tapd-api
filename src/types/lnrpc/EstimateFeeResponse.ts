// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface EstimateFeeResponsePartial {
  'feeSat'?: (number | string | Long);
  'feerateSatPerByte'?: (number | string | Long);
  'satPerVbyte'?: (number | string | Long);
}

export interface EstimateFeeResponse {
  'feeSat': (string);
  'feerateSatPerByte': (string);
  'satPerVbyte': (string);
}
