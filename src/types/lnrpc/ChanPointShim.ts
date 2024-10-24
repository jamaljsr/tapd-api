// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { KeyDescriptorPartial as _lnrpc_KeyDescriptorPartial, KeyDescriptor as _lnrpc_KeyDescriptor } from '../lnrpc/KeyDescriptor';
import type { Long } from '@grpc/proto-loader';

export interface ChanPointShimPartial {
  'amt'?: (number | string | Long);
  'chanPoint'?: (_lnrpc_ChannelPointPartial | null);
  'localKey'?: (_lnrpc_KeyDescriptorPartial | null);
  'remoteKey'?: (Buffer | Uint8Array | string);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'thawHeight'?: (number);
  'musig2'?: (boolean);
}

export interface ChanPointShim {
  'amt': (string);
  'chanPoint': (_lnrpc_ChannelPoint | null);
  'localKey': (_lnrpc_KeyDescriptor | null);
  'remoteKey': (Buffer);
  'pendingChanId': (Buffer);
  'thawHeight': (number);
  'musig2': (boolean);
}
