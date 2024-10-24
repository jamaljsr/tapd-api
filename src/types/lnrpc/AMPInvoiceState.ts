// Original file: protos/lightning.proto

import type { InvoiceHTLCStatePartial as _lnrpc_InvoiceHTLCStatePartial, InvoiceHTLCState as _lnrpc_InvoiceHTLCState } from '../lnrpc/InvoiceHTLCState';
import type { Long } from '@grpc/proto-loader';

export interface AMPInvoiceStatePartial {
  'state'?: (_lnrpc_InvoiceHTLCStatePartial);
  'settleIndex'?: (number | string | Long);
  'settleTime'?: (number | string | Long);
  'amtPaidMsat'?: (number | string | Long);
}

export interface AMPInvoiceState {
  'state': (_lnrpc_InvoiceHTLCState);
  'settleIndex': (string);
  'settleTime': (string);
  'amtPaidMsat': (string);
}
