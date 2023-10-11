// Original file: protos/universe.proto

import type { ProofType as _universerpc_ProofType } from '../universerpc/ProofType';

export interface GlobalFederationSyncConfigPartial {
  'proofType'?: (_universerpc_ProofType | keyof typeof _universerpc_ProofType);
  'allowSyncInsert'?: (boolean);
  'allowSyncExport'?: (boolean);
}

export interface GlobalFederationSyncConfig {
  'proofType': (keyof typeof _universerpc_ProofType);
  'allowSyncInsert': (boolean);
  'allowSyncExport': (boolean);
}
