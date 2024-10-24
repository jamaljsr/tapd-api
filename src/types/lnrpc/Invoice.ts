// Original file: protos/lightning.proto

import type { RouteHintPartial as _lnrpc_RouteHintPartial, RouteHint as _lnrpc_RouteHint } from '../lnrpc/RouteHint';
import type { InvoiceHTLCPartial as _lnrpc_InvoiceHTLCPartial, InvoiceHTLC as _lnrpc_InvoiceHTLC } from '../lnrpc/InvoiceHTLC';
import type { FeaturePartial as _lnrpc_FeaturePartial, Feature as _lnrpc_Feature } from '../lnrpc/Feature';
import type { AMPInvoiceStatePartial as _lnrpc_AMPInvoiceStatePartial, AMPInvoiceState as _lnrpc_AMPInvoiceState } from '../lnrpc/AMPInvoiceState';
import type { BlindedPathConfigPartial as _lnrpc_BlindedPathConfigPartial, BlindedPathConfig as _lnrpc_BlindedPathConfig } from '../lnrpc/BlindedPathConfig';
import type { Long } from '@grpc/proto-loader';

// Original file: protos/lightning.proto

export const _lnrpc_Invoice_InvoiceState = {
  OPEN: 'OPEN',
  SETTLED: 'SETTLED',
  CANCELED: 'CANCELED',
  ACCEPTED: 'ACCEPTED',
} as const;

export type _lnrpc_Invoice_InvoiceStatePartial =
  | 'OPEN'
  | 0
  | 'SETTLED'
  | 1
  | 'CANCELED'
  | 2
  | 'ACCEPTED'
  | 3

export type _lnrpc_Invoice_InvoiceState = typeof _lnrpc_Invoice_InvoiceState[keyof typeof _lnrpc_Invoice_InvoiceState]

export interface InvoicePartial {
  'memo'?: (string);
  'rPreimage'?: (Buffer | Uint8Array | string);
  'rHash'?: (Buffer | Uint8Array | string);
  'value'?: (number | string | Long);
  'settled'?: (boolean);
  'creationDate'?: (number | string | Long);
  'settleDate'?: (number | string | Long);
  'paymentRequest'?: (string);
  'descriptionHash'?: (Buffer | Uint8Array | string);
  'expiry'?: (number | string | Long);
  'fallbackAddr'?: (string);
  'cltvExpiry'?: (number | string | Long);
  'routeHints'?: (_lnrpc_RouteHintPartial)[];
  'private'?: (boolean);
  'addIndex'?: (number | string | Long);
  'settleIndex'?: (number | string | Long);
  'amtPaid'?: (number | string | Long);
  'amtPaidSat'?: (number | string | Long);
  'amtPaidMsat'?: (number | string | Long);
  'state'?: (_lnrpc_Invoice_InvoiceStatePartial);
  'htlcs'?: (_lnrpc_InvoiceHTLCPartial)[];
  'valueMsat'?: (number | string | Long);
  'features'?: ({[key: number]: _lnrpc_FeaturePartial});
  'isKeysend'?: (boolean);
  'paymentAddr'?: (Buffer | Uint8Array | string);
  'isAmp'?: (boolean);
  'ampInvoiceState'?: ({[key: string]: _lnrpc_AMPInvoiceStatePartial});
  'isBlinded'?: (boolean);
  'blindedPathConfig'?: (_lnrpc_BlindedPathConfigPartial | null);
}

export interface Invoice {
  'memo': (string);
  'rPreimage': (Buffer);
  'rHash': (Buffer);
  'value': (string);
  'settled': (boolean);
  'creationDate': (string);
  'settleDate': (string);
  'paymentRequest': (string);
  'descriptionHash': (Buffer);
  'expiry': (string);
  'fallbackAddr': (string);
  'cltvExpiry': (string);
  'routeHints': (_lnrpc_RouteHint)[];
  'private': (boolean);
  'addIndex': (string);
  'settleIndex': (string);
  'amtPaid': (string);
  'amtPaidSat': (string);
  'amtPaidMsat': (string);
  'state': (_lnrpc_Invoice_InvoiceState);
  'htlcs': (_lnrpc_InvoiceHTLC)[];
  'valueMsat': (string);
  'features': ({[key: number]: _lnrpc_Feature});
  'isKeysend': (boolean);
  'paymentAddr': (Buffer);
  'isAmp': (boolean);
  'ampInvoiceState': ({[key: string]: _lnrpc_AMPInvoiceState});
  'isBlinded': (boolean);
  'blindedPathConfig': (_lnrpc_BlindedPathConfig | null);
}
