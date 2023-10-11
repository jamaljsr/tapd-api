// Original file: protos/universe.proto

import type { IDPartial as _universerpc_IDPartial, ID as _universerpc_ID } from '../universerpc/ID';

export interface AssetFederationSyncConfigPartial {
  'id'?: (_universerpc_IDPartial | null);
  'allowSyncInsert'?: (boolean);
  'allowSyncExport'?: (boolean);
}

export interface AssetFederationSyncConfig {
  'id': (_universerpc_ID | null);
  'allowSyncInsert': (boolean);
  'allowSyncExport': (boolean);
}
