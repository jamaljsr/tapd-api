// Original file: protos/lightning.proto

import type { LightningAddressPartial as _lnrpc_LightningAddressPartial, LightningAddress as _lnrpc_LightningAddress } from '../lnrpc/LightningAddress';
import type { Long } from '@grpc/proto-loader';

export interface ConnectPeerRequestPartial {
  'addr'?: (_lnrpc_LightningAddressPartial | null);
  'perm'?: (boolean);
  'timeout'?: (number | string | Long);
}

export interface ConnectPeerRequest {
  'addr': (_lnrpc_LightningAddress | null);
  'perm': (boolean);
  'timeout': (string);
}
