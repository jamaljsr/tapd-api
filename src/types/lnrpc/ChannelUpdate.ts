// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelUpdatePartial {
  'signature'?: (Buffer | Uint8Array | string);
  'chainHash'?: (Buffer | Uint8Array | string);
  'chanId'?: (number | string | Long);
  'timestamp'?: (number);
  'channelFlags'?: (number);
  'timeLockDelta'?: (number);
  'htlcMinimumMsat'?: (number | string | Long);
  'baseFee'?: (number);
  'feeRate'?: (number);
  'messageFlags'?: (number);
  'htlcMaximumMsat'?: (number | string | Long);
  'extraOpaqueData'?: (Buffer | Uint8Array | string);
}

export interface ChannelUpdate {
  'signature': (Buffer);
  'chainHash': (Buffer);
  'chanId': (string);
  'timestamp': (number);
  'channelFlags': (number);
  'timeLockDelta': (number);
  'htlcMinimumMsat': (string);
  'baseFee': (number);
  'feeRate': (number);
  'messageFlags': (number);
  'htlcMaximumMsat': (string);
  'extraOpaqueData': (Buffer);
}
