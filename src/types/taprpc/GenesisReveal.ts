// Original file: protos/taprootassets.proto

import type { GenesisInfoPartial as _taprpc_GenesisInfoPartial, GenesisInfo as _taprpc_GenesisInfo } from '../taprpc/GenesisInfo';

export interface GenesisRevealPartial {
  'genesisBaseReveal'?: (_taprpc_GenesisInfoPartial | null);
}

export interface GenesisReveal {
  'genesisBaseReveal': (_taprpc_GenesisInfo | null);
}
