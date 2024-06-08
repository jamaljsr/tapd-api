// Original file: protos/tapchannel.proto

import type { Long } from '@grpc/proto-loader';

export interface FundChannelRequestPartial {
  'assetAmount'?: (number | string | Long);
  'assetId'?: (Buffer | Uint8Array | string);
  'peerPubkey'?: (Buffer | Uint8Array | string);
  'feeRateSatPerVbyte'?: (number);
  'pushSat'?: (number | string | Long);
}

export interface FundChannelRequest {
  'assetAmount': (string);
  'assetId': (Buffer);
  'peerPubkey': (Buffer);
  'feeRateSatPerVbyte': (number);
  'pushSat': (string);
}
