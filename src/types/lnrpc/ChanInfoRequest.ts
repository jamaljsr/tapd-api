// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ChanInfoRequestPartial {
  'chanId'?: (number | string | Long);
  'chanPoint'?: (string);
  'includeAuthProof'?: (boolean);
}

export interface ChanInfoRequest {
  'chanId': (string);
  'chanPoint': (string);
  'includeAuthProof': (boolean);
}
