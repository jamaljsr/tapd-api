// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface PendingHTLCPartial {
  'incoming'?: (boolean);
  'amount'?: (number | string | Long);
  'outpoint'?: (string);
  'maturityHeight'?: (number);
  'blocksTilMaturity'?: (number);
  'stage'?: (number);
}

export interface PendingHTLC {
  'incoming': (boolean);
  'amount': (string);
  'outpoint': (string);
  'maturityHeight': (number);
  'blocksTilMaturity': (number);
  'stage': (number);
}
