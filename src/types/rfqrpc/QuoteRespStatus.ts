// Original file: protos/rfq.proto

export const QuoteRespStatus = {
  INVALID_RATE_TICK: 'INVALID_RATE_TICK',
  INVALID_EXPIRY: 'INVALID_EXPIRY',
  PRICE_ORACLE_QUERY_ERR: 'PRICE_ORACLE_QUERY_ERR',
} as const;

export type QuoteRespStatusPartial =
  | 'INVALID_RATE_TICK'
  | 0
  | 'INVALID_EXPIRY'
  | 1
  | 'PRICE_ORACLE_QUERY_ERR'
  | 2

export type QuoteRespStatus = typeof QuoteRespStatus[keyof typeof QuoteRespStatus]
