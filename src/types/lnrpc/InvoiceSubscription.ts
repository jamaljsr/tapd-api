// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface InvoiceSubscriptionPartial {
  'addIndex'?: (number | string | Long);
  'settleIndex'?: (number | string | Long);
}

export interface InvoiceSubscription {
  'addIndex': (string);
  'settleIndex': (string);
}
