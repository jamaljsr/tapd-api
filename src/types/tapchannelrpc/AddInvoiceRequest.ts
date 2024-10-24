// Original file: protos/tapchannelrpc/tapchannel.proto

import type { InvoicePartial as _lnrpc_InvoicePartial, Invoice as _lnrpc_Invoice } from '../lnrpc/Invoice';
import type { Long } from '@grpc/proto-loader';

export interface AddInvoiceRequestPartial {
  'assetId'?: (Buffer | Uint8Array | string);
  'assetAmount'?: (number | string | Long);
  'peerPubkey'?: (Buffer | Uint8Array | string);
  'invoiceRequest'?: (_lnrpc_InvoicePartial | null);
}

export interface AddInvoiceRequest {
  'assetId': (Buffer);
  'assetAmount': (string);
  'peerPubkey': (Buffer);
  'invoiceRequest': (_lnrpc_Invoice | null);
}
