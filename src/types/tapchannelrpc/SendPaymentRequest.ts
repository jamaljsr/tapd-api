// Original file: protos/tapchannelrpc/tapchannel.proto

import type { SendPaymentRequestPartial as _routerrpc_SendPaymentRequestPartial, SendPaymentRequest as _routerrpc_SendPaymentRequest } from '../routerrpc/SendPaymentRequest';
import type { Long } from '@grpc/proto-loader';

export interface SendPaymentRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetAmount'?: (number | string | Long);
  'peerPubkey'?: (Buffer | Uint8Array | string);
  'paymentRequest'?: (_routerrpc_SendPaymentRequestPartial | null);
  'rfqId'?: (Buffer | Uint8Array | string);
  'allowOverpay'?: (boolean);
  'groupKey'?: (Buffer | Uint8Array | string);
}

export interface SendPaymentRequest {
  'assetId': (Buffer);
  'assetAmount': (string);
  'peerPubkey': (Buffer);
  'paymentRequest': (_routerrpc_SendPaymentRequest | null);
  'rfqId': (Buffer);
  'allowOverpay': (boolean);
  'groupKey': (Buffer);
}
