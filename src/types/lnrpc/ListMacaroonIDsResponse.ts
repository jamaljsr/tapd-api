// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ListMacaroonIDsResponsePartial {
  'rootKeyIds'?: (number | string | Long)[];
}

export interface ListMacaroonIDsResponse {
  'rootKeyIds': (string)[];
}
