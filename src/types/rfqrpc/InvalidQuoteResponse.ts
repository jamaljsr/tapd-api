// Original file: protos/rfqrpc/rfq.proto

import type { QuoteRespStatusPartial as _rfqrpc_QuoteRespStatusPartial, QuoteRespStatus as _rfqrpc_QuoteRespStatus } from '../rfqrpc/QuoteRespStatus';

export interface InvalidQuoteResponsePartial {
  'status'?: (_rfqrpc_QuoteRespStatusPartial);
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
}

export interface InvalidQuoteResponse {
  'status': (_rfqrpc_QuoteRespStatus);
  'peer': (string);
  'id': (Buffer);
}
