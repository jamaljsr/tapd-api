// Original file: protos/universerpc/universe.proto

import type { SortDirectionPartial as _universerpc_SortDirectionPartial, SortDirection as _universerpc_SortDirection } from '../universerpc/SortDirection';

export interface AssetRootRequestPartial {
  'withAmountsById'?: (boolean);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_universerpc_SortDirectionPartial);
}

export interface AssetRootRequest {
  'withAmountsById': (boolean);
  'offset': (number);
  'limit': (number);
  'direction': (_universerpc_SortDirection);
}
