// Original file: protos/universe.proto

import type { UniverseSyncModePartial as _universerpc_UniverseSyncModePartial, UniverseSyncMode as _universerpc_UniverseSyncMode } from '../universerpc/UniverseSyncMode';
import type { SyncTargetPartial as _universerpc_SyncTargetPartial, SyncTarget as _universerpc_SyncTarget } from '../universerpc/SyncTarget';

export interface SyncRequestPartial {
  'universeHost'?: (string);
  'syncMode'?: (_universerpc_UniverseSyncModePartial);
  'syncTargets'?: (_universerpc_SyncTargetPartial)[];
}

export interface SyncRequest {
  'universeHost': (string);
  'syncMode': (_universerpc_UniverseSyncMode);
  'syncTargets': (_universerpc_SyncTarget)[];
}
