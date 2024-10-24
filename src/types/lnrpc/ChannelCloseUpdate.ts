// Original file: protos/lightning.proto

import type { CloseOutputPartial as _lnrpc_CloseOutputPartial, CloseOutput as _lnrpc_CloseOutput } from '../lnrpc/CloseOutput';

export interface ChannelCloseUpdatePartial {
  'closingTxid'?: (Buffer | Uint8Array | string);
  'success'?: (boolean);
  'localCloseOutput'?: (_lnrpc_CloseOutputPartial | null);
  'remoteCloseOutput'?: (_lnrpc_CloseOutputPartial | null);
  'additionalOutputs'?: (_lnrpc_CloseOutputPartial)[];
}

export interface ChannelCloseUpdate {
  'closingTxid': (Buffer);
  'success': (boolean);
  'localCloseOutput': (_lnrpc_CloseOutput | null);
  'remoteCloseOutput': (_lnrpc_CloseOutput | null);
  'additionalOutputs': (_lnrpc_CloseOutput)[];
}
