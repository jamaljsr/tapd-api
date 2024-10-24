// Original file: protos/lightning.proto

import type { InvoiceHTLCStatePartial as _lnrpc_InvoiceHTLCStatePartial, InvoiceHTLCState as _lnrpc_InvoiceHTLCState } from '../lnrpc/InvoiceHTLCState';
import type { AMPPartial as _lnrpc_AMPPartial, AMP as _lnrpc_AMP } from '../lnrpc/AMP';
import type { Long } from '@grpc/proto-loader';

export interface InvoiceHTLCPartial {
  'chanId'?: (number | string | Long);
  'htlcIndex'?: (number | string | Long);
  'amtMsat'?: (number | string | Long);
  'acceptHeight'?: (number);
  'acceptTime'?: (number | string | Long);
  'resolveTime'?: (number | string | Long);
  'expiryHeight'?: (number);
  'state'?: (_lnrpc_InvoiceHTLCStatePartial);
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'mppTotalAmtMsat'?: (number | string | Long);
  'amp'?: (_lnrpc_AMPPartial | null);
}

export interface InvoiceHTLC {
  'chanId': (string);
  'htlcIndex': (string);
  'amtMsat': (string);
  'acceptHeight': (number);
  'acceptTime': (string);
  'resolveTime': (string);
  'expiryHeight': (number);
  'state': (_lnrpc_InvoiceHTLCState);
  'customRecords': ({[key: number]: Buffer});
  'mppTotalAmtMsat': (string);
  'amp': (_lnrpc_AMP | null);
}
