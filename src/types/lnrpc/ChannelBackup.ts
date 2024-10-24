// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';

export interface ChannelBackupPartial {
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
  'chanBackup'?: (Buffer | Uint8Array | string);
}

export interface ChannelBackup {
  'chanPoint': (_lnrpc_ChannelPoint | null);
  'chanBackup': (Buffer);
}
