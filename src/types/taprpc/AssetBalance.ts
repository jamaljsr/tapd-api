// Original file: protos/taprootassets.proto

import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';
import type { Long } from '@grpc/proto-loader';

export interface AssetBalancePartial {
  'assetGenesis'?: (_taprpc_GenesisInfoPartial | null);
  'balance'?: (number | string | Long);
}

export interface AssetBalance {
  'assetGenesis': (_taprpc_GenesisInfo | null);
  'balance': (string);
}
