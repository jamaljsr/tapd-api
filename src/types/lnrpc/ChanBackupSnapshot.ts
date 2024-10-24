// Original file: protos/lightning.proto

import type { ChannelBackupsPartial as _lnrpc_ChannelBackupsPartial, ChannelBackups as _lnrpc_ChannelBackups } from '../lnrpc/ChannelBackups';
import type { MultiChanBackupPartial as _lnrpc_MultiChanBackupPartial, MultiChanBackup as _lnrpc_MultiChanBackup } from '../lnrpc/MultiChanBackup';

export interface ChanBackupSnapshotPartial {
  'singleChanBackups'?: (_lnrpc_ChannelBackupsPartial | null);
  'multiChanBackup'?: (_lnrpc_MultiChanBackupPartial | null);
}

export interface ChanBackupSnapshot {
  'singleChanBackups': (_lnrpc_ChannelBackups | null);
  'multiChanBackup': (_lnrpc_MultiChanBackup | null);
}
