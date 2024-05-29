// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface FundChannelRequestPartial {
  'amount'?: (number | string | Long);
  'assetId'?: (Buffer | Uint8Array | string);
  'peerPubkey'?: (Buffer | Uint8Array | string);
  'feeRateSatPerVbyte'?: (number);
}

export interface FundChannelRequest {
  'amount': (string);
  'assetId': (Buffer);
  'peerPubkey': (Buffer);
  'feeRateSatPerVbyte': (number);
}
