// Original file: protos/rfq.proto

import type { QuoteRespStatus as _rfqrpc_QuoteRespStatus } from '../rfqrpc/QuoteRespStatus';

export interface InvalidQuoteResponsePartial {
  'status'?: (_rfqrpc_QuoteRespStatus | keyof typeof _rfqrpc_QuoteRespStatus);
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
}

export interface InvalidQuoteResponse {
  'status': (keyof typeof _rfqrpc_QuoteRespStatus);
  'peer': (string);
  'id': (Buffer);
}
