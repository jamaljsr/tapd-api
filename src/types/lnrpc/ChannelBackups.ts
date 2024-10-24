// Original file: protos/lightning.proto

import type { ChannelBackupPartial as _lnrpc_ChannelBackupPartial, ChannelBackup as _lnrpc_ChannelBackup } from '../lnrpc/ChannelBackup';

export interface ChannelBackupsPartial {
  'chanBackups'?: (_lnrpc_ChannelBackupPartial)[];
}

export interface ChannelBackups {
  'chanBackups': (_lnrpc_ChannelBackup)[];
}
