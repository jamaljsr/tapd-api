// Original file: protos/lightning.proto

import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { Long } from '@grpc/proto-loader';

export interface ListInvoiceResponsePartial {
  'invoices'?: (_lnrpc_InvoicePartial)[];
  'lastIndexOffset'?: (number | string | Long);
  'firstIndexOffset'?: (number | string | Long);
}

export interface ListInvoiceResponse {
  'invoices': (_lnrpc_Invoice)[];
  'lastIndexOffset': (string);
  'firstIndexOffset': (string);
}
