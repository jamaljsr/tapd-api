// Original file: protos/universerpc/universe.proto

import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { GenesisRevealPartial as _taprpc_GenesisRevealPartial, GenesisReveal as _taprpc_GenesisReveal } from '../taprpc/GenesisReveal';
import type { GroupKeyRevealPartial as _taprpc_GroupKeyRevealPartial, GroupKeyReveal as _taprpc_GroupKeyReveal } from '../taprpc/GroupKeyReveal';

export interface IssuanceDataPartial {
  'metaReveal'?: (_taprpc_AssetMetaPartial | null);
  'genesisReveal'?: (_taprpc_GenesisRevealPartial | null);
  'groupKeyReveal'?: (_taprpc_GroupKeyRevealPartial | null);
}

export interface IssuanceData {
  'metaReveal': (_taprpc_AssetMeta | null);
  'genesisReveal': (_taprpc_GenesisReveal | null);
  'groupKeyReveal': (_taprpc_GroupKeyReveal | null);
}
