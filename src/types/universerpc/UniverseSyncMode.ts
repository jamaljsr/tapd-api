// Original file: protos/universe.proto

export const UniverseSyncMode = {
  SYNC_ISSUANCE_ONLY: 'SYNC_ISSUANCE_ONLY',
  SYNC_FULL: 'SYNC_FULL',
} as const;

export type UniverseSyncModePartial =
  | 'SYNC_ISSUANCE_ONLY'
  | 0
  | 'SYNC_FULL'
  | 1

export type UniverseSyncMode = typeof UniverseSyncMode[keyof typeof UniverseSyncMode]
