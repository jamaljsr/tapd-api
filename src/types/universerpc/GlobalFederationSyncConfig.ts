// Original file: protos/universe.proto

import type { ProofTypePartial as _universerpc_ProofTypePartial, ProofType as _universerpc_ProofType } from '../universerpc/ProofType';

export interface GlobalFederationSyncConfigPartial {
  'proofType'?: (_universerpc_ProofTypePartial);
  'allowSyncInsert'?: (boolean);
  'allowSyncExport'?: (boolean);
}

export interface GlobalFederationSyncConfig {
  'proofType': (_universerpc_ProofType);
  'allowSyncInsert': (boolean);
  'allowSyncExport': (boolean);
}
