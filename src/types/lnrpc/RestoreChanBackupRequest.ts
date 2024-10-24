// Original file: protos/lightning.proto

import type { ChannelBackupsPartial as _lnrpc_ChannelBackupsPartial, ChannelBackups as _lnrpc_ChannelBackups } from '../lnrpc/ChannelBackups';

export interface RestoreChanBackupRequestPartial {
  'chanBackups'?: (_lnrpc_ChannelBackupsPartial | null);
  'multiChanBackup'?: (Buffer | Uint8Array | string);
  'backup'?: "chanBackups"|"multiChanBackup";
}

export interface RestoreChanBackupRequest {
  'chanBackups'?: (_lnrpc_ChannelBackups | null);
  'multiChanBackup'?: (Buffer);
  'backup': "chanBackups"|"multiChanBackup";
}
