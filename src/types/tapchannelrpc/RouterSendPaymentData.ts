// Original file: protos/tapchannel.proto

import type { Long } from '@grpc/proto-loader';

export interface RouterSendPaymentDataPartial {
  'assetAmounts'?: ({[key: string]: number | string | Long});
  'rfqId'?: (Buffer | Uint8Array | string);
}

export interface RouterSendPaymentData {
  'assetAmounts': ({[key: string]: string});
  'rfqId': (Buffer);
}
