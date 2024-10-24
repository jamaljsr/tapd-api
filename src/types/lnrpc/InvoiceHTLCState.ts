// Original file: protos/lightning.proto

export const InvoiceHTLCState = {
  ACCEPTED: 'ACCEPTED',
  SETTLED: 'SETTLED',
  CANCELED: 'CANCELED',
} as const;

export type InvoiceHTLCStatePartial =
  | 'ACCEPTED'
  | 0
  | 'SETTLED'
  | 1
  | 'CANCELED'
  | 2

export type InvoiceHTLCState = typeof InvoiceHTLCState[keyof typeof InvoiceHTLCState]
