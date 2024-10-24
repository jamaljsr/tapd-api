// Original file: protos/priceoraclerpc/price_oracle.proto

export const TransactionType = {
  PURCHASE: 'PURCHASE',
  SALE: 'SALE',
} as const;

export type TransactionTypePartial =
  | 'PURCHASE'
  | 0
  | 'SALE'
  | 1

export type TransactionType = typeof TransactionType[keyof typeof TransactionType]
