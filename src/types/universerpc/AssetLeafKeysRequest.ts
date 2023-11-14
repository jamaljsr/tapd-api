// Original file: protos/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { SortDirection as _universerpc_SortDirection } from '../universerpc/SortDirection';

export interface AssetLeafKeysRequestPartial {
  'id'?: (_universerpc_IDPartial | null);
  'offset'?: (number);
  'limit'?: (number);
  'direction'?: (_universerpc_SortDirection | keyof typeof _universerpc_SortDirection);
}

export interface AssetLeafKeysRequest {
  'id': (_universerpc_ID | null);
  'offset': (number);
  'limit': (number);
  'direction': (keyof typeof _universerpc_SortDirection);
}
