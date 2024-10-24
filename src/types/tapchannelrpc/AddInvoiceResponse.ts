// Original file: protos/tapchannelrpc/tapchannel.proto

import type { PeerAcceptedBuyQuotePartial as _rfqrpc_PeerAcceptedBuyQuotePartial, PeerAcceptedBuyQuote as _rfqrpc_PeerAcceptedBuyQuote } from '../rfqrpc/PeerAcceptedBuyQuote';
import type { AddInvoiceResponsePartial as _lnrpc_AddInvoiceResponsePartial, AddInvoiceResponse as _lnrpc_AddInvoiceResponse } from '../lnrpc/AddInvoiceResponse';

export interface AddInvoiceResponsePartial {
  'acceptedBuyQuote'?: (_rfqrpc_PeerAcceptedBuyQuotePartial | null);
  'invoiceResult'?: (_lnrpc_AddInvoiceResponsePartial | null);
}

export interface AddInvoiceResponse {
  'acceptedBuyQuote': (_rfqrpc_PeerAcceptedBuyQuote | null);
  'invoiceResult': (_lnrpc_AddInvoiceResponse | null);
}
