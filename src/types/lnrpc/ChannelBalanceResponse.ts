// Original file: protos/lightning.proto

import type { AmountPartial as _lnrpc_AmountPartial, Amount as _lnrpc_Amount } from '../lnrpc/Amount';
import type { Long } from '@grpc/proto-loader';

export interface ChannelBalanceResponsePartial {
  'balance'?: (number | string | Long);
  'pendingOpenBalance'?: (number | string | Long);
  'localBalance'?: (_lnrpc_AmountPartial | null);
  'remoteBalance'?: (_lnrpc_AmountPartial | null);
  'unsettledLocalBalance'?: (_lnrpc_AmountPartial | null);
  'unsettledRemoteBalance'?: (_lnrpc_AmountPartial | null);
  'pendingOpenLocalBalance'?: (_lnrpc_AmountPartial | null);
  'pendingOpenRemoteBalance'?: (_lnrpc_AmountPartial | null);
  'customChannelData'?: (Buffer | Uint8Array | string);
}

export interface ChannelBalanceResponse {
  'balance': (string);
  'pendingOpenBalance': (string);
  'localBalance': (_lnrpc_Amount | null);
  'remoteBalance': (_lnrpc_Amount | null);
  'unsettledLocalBalance': (_lnrpc_Amount | null);
  'unsettledRemoteBalance': (_lnrpc_Amount | null);
  'pendingOpenLocalBalance': (_lnrpc_Amount | null);
  'pendingOpenRemoteBalance': (_lnrpc_Amount | null);
  'customChannelData': (Buffer);
}
