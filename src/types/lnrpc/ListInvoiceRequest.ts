// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface ListInvoiceRequestPartial {
  'pendingOnly'?: (boolean);
  'indexOffset'?: (number | string | Long);
  'numMaxInvoices'?: (number | string | Long);
  'reversed'?: (boolean);
  'creationDateStart'?: (number | string | Long);
  'creationDateEnd'?: (number | string | Long);
}

export interface ListInvoiceRequest {
  'pendingOnly': (boolean);
  'indexOffset': (string);
  'numMaxInvoices': (string);
  'reversed': (boolean);
  'creationDateStart': (string);
  'creationDateEnd': (string);
}
