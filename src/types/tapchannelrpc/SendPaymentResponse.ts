// Original file: protos/tapchannelrpc/tapchannel.proto

import type { PeerAcceptedSellQuotePartial as _rfqrpc_PeerAcceptedSellQuotePartial, PeerAcceptedSellQuote as _rfqrpc_PeerAcceptedSellQuote } from '../rfqrpc/PeerAcceptedSellQuote';
import type { PaymentPartial as _lnrpc_PaymentPartial, Payment as _lnrpc_Payment } from '../lnrpc/Payment';

export interface SendPaymentResponsePartial {
  'acceptedSellOrder'?: (_rfqrpc_PeerAcceptedSellQuotePartial | null);
  'paymentResult'?: (_lnrpc_PaymentPartial | null);
  'result'?: "acceptedSellOrder"|"paymentResult";
}

export interface SendPaymentResponse {
  'acceptedSellOrder'?: (_rfqrpc_PeerAcceptedSellQuote | null);
  'paymentResult'?: (_lnrpc_Payment | null);
  'result': "acceptedSellOrder"|"paymentResult";
}
