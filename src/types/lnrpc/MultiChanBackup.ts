// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';

export interface MultiChanBackupPartial {
  'chanPoints'?: (_lnrpc_ChannelPointPartial)[];
  'multiChanBackup'?: (Buffer | Uint8Array | string);
}

export interface MultiChanBackup {
  'chanPoints': (_lnrpc_ChannelPoint)[];
  'multiChanBackup': (Buffer);
}
