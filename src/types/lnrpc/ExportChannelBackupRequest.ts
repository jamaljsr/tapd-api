// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';

export interface ExportChannelBackupRequestPartial {
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
}

export interface ExportChannelBackupRequest {
  'chanPoint': (_lnrpc_ChannelPoint | null);
}
