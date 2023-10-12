// Original file: protos/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface InfoResponsePartial {
  'runtimeId'?: (number | string | Long);
  'numAssets'?: (number | string | Long);
}

export interface InfoResponse {
  'runtimeId': (string);
  'numAssets': (string);
}
