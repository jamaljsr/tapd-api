// Original file: protos/universerpc/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { SortDirectionPartial as _universerpc_SortDirectionPartial, SortDirection as _universerpc_SortDirection } from '../universerpc/SortDirection';

export interface AssetLeafKeysRequestPartial {
  'id'?: (_universerpc_IDPartial | null);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_universerpc_SortDirectionPartial);
}

export interface AssetLeafKeysRequest {
  'id': (_universerpc_ID | null);
  'offset': (number);
  'limit': (number);
  'direction': (_universerpc_SortDirection);
}
