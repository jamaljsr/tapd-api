// Original file: protos/universerpc/universe.proto

import type { Long } from '@grpc/proto-loader';

export interface StatsResponsePartial {
  'numTotalAssets'?: (number | string | Long);
  'numTotalGroups'?: (number | string | Long);
  'numTotalSyncs'?: (number | string | Long);
  'numTotalProofs'?: (number | string | Long);
}

export interface StatsResponse {
  'numTotalAssets': (string);
  'numTotalGroups': (string);
  'numTotalSyncs': (string);
  'numTotalProofs': (string);
}
