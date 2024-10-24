// Original file: protos/rfqrpc/rfq.proto

export const QuoteRespStatus = {
  INVALID_ASSET_RATES: 'INVALID_ASSET_RATES',
  INVALID_EXPIRY: 'INVALID_EXPIRY',
  PRICE_ORACLE_QUERY_ERR: 'PRICE_ORACLE_QUERY_ERR',
} as const;

export type QuoteRespStatusPartial =
  | 'INVALID_ASSET_RATES'
  | 0
  | 'INVALID_EXPIRY'
  | 1
  | 'PRICE_ORACLE_QUERY_ERR'
  | 2

export type QuoteRespStatus = typeof QuoteRespStatus[keyof typeof QuoteRespStatus]
