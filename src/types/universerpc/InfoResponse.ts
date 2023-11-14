// Original file: protos/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface InfoResponsePartial {
  'runtimeId'?: (number | string | Long);
}

export interface InfoResponse {
  'runtimeId': (string);
}
