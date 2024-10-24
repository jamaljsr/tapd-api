// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface AliasMapPartial {
  'baseScid'?: (number | string | Long);
  'aliases'?: (number | string | Long)[];
}

export interface AliasMap {
  'baseScid': (string);
  'aliases': (string)[];
}
