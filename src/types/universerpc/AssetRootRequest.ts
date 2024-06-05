// Original file: protos/universe.proto

import type { SortDirection as _universerpc_SortDirection } from '../universerpc/SortDirection';

export interface AssetRootRequestPartial {
  'withAmountsById'?: (boolean);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_universerpc_SortDirection | keyof typeof _universerpc_SortDirection);
}

export interface AssetRootRequest {
  'withAmountsById': (boolean);
  'offset': (number);
  'limit': (number);
  'direction': (keyof typeof _universerpc_SortDirection);
}
