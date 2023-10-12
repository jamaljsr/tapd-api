// Original file: protos/universe.proto

import type { GlobalFederationSyncConfigPartial as _universerpc_GlobalFederationSyncConfigPartial, GlobalFederationSyncConfig as _universerpc_GlobalFederationSyncConfig } from '../universerpc/GlobalFederationSyncConfig';
import type { AssetFederationSyncConfigPartial as _universerpc_AssetFederationSyncConfigPartial, AssetFederationSyncConfig as _universerpc_AssetFederationSyncConfig } from '../universerpc/AssetFederationSyncConfig';

export interface QueryFederationSyncConfigResponsePartial {
  'globalSyncConfigs'?: (_universerpc_GlobalFederationSyncConfigPartial)[];
  'assetSyncConfigs'?: (_universerpc_AssetFederationSyncConfigPartial)[];
}

export interface QueryFederationSyncConfigResponse {
  'globalSyncConfigs': (_universerpc_GlobalFederationSyncConfig)[];
  'assetSyncConfigs': (_universerpc_AssetFederationSyncConfig)[];
}
