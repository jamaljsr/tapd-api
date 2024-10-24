// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface LookupHtlcResolutionRequestPartial {
  'chanId'?: (number | string | Long);
  'htlcIndex'?: (number | string | Long);
}

export interface LookupHtlcResolutionRequest {
  'chanId': (string);
  'htlcIndex': (string);
}
