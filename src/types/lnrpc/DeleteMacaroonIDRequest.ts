// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface DeleteMacaroonIDRequestPartial {
  'rootKeyId'?: (number | string | Long);
}

export interface DeleteMacaroonIDRequest {
  'rootKeyId': (string);
}
