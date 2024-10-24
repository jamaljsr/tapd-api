// Original file: protos/lightning.proto

import type { ChannelPointPartial as _lnrpc_ChannelPointPartial, ChannelPoint as _lnrpc_ChannelPoint } from '../lnrpc/ChannelPoint';
import type { Long } from '@grpc/proto-loader';

export interface CloseChannelRequestPartial {
  'channelPoint'?: (_lnrpc_ChannelPointPartial | null);
  'force'?: (boolean);
  'targetConf'?: (number);
  'satPerByte'?: (number | string | Long);
  'deliveryAddress'?: (string);
  'satPerVbyte'?: (number | string | Long);
  'maxFeePerVbyte'?: (number | string | Long);
  'noWait'?: (boolean);
}

export interface CloseChannelRequest {
  'channelPoint': (_lnrpc_ChannelPoint | null);
  'force': (boolean);
  'targetConf': (number);
  'satPerByte': (string);
  'deliveryAddress': (string);
  'satPerVbyte': (string);
  'maxFeePerVbyte': (string);
  'noWait': (boolean);
}
