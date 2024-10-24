// Original file: protos/universerpc/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';
import type { MerkleSumNodePartial as _universerpc_MerkleSumNodePartial, MerkleSumNode as _universerpc_MerkleSumNode } from '../universerpc/MerkleSumNode';
import type { Long } from '@grpc/proto-loader';

export interface UniverseRootPartial {
  'id'?: (_universerpc_IDPartial | null);
  'mssmtRoot'?: (_universerpc_MerkleSumNodePartial | null);
  'assetName'?: (string);
  'amountsByAssetId'?: ({[key: string]: number | string | Long});
}

export interface UniverseRoot {
  'id': (_universerpc_ID | null);
  'mssmtRoot': (_universerpc_MerkleSumNode | null);
  'assetName': (string);
  'amountsByAssetId': ({[key: string]: string});
}
