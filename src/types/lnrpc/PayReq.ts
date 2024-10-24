// Original file: protos/lightning.proto

import type { RouteHintPartial as _lnrpc_RouteHintPartial, RouteHint as _lnrpc_RouteHint } from '../lnrpc/RouteHint';
import type { FeaturePartial as _lnrpc_FeaturePartial, Feature as _lnrpc_Feature } from '../lnrpc/Feature';
import type { BlindedPaymentPathPartial as _lnrpc_BlindedPaymentPathPartial, BlindedPaymentPath as _lnrpc_BlindedPaymentPath } from '../lnrpc/BlindedPaymentPath';
import type { Long } from '@grpc/proto-loader';

export interface PayReqPartial {
  'destination'?: (string);
  'paymentHash'?: (string);
  'numSatoshis'?: (number | string | Long);
  'timestamp'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'description'?: (string);
  'descriptionHash'?: (string);
  'fallbackAddr'?: (string);
  'cltvExpiry'?: (number | string | Long);
  'routeHints'?: (_lnrpc_RouteHintPartial)[];
  'paymentAddr'?: (Buffer | Uint8Array | string);
  'numMsat'?: (number | string | Long);
  'features'?: ({[key: number]: _lnrpc_FeaturePartial});
  'blindedPaths'?: (_lnrpc_BlindedPaymentPathPartial)[];
}

export interface PayReq {
  'destination': (string);
  'paymentHash': (string);
  'numSatoshis': (string);
  'timestamp': (string);
  'expiry': (string);
  'description': (string);
  'descriptionHash': (string);
  'fallbackAddr': (string);
  'cltvExpiry': (string);
  'routeHints': (_lnrpc_RouteHint)[];
  'paymentAddr': (Buffer);
  'numMsat': (string);
  'features': ({[key: number]: _lnrpc_Feature});
  'blindedPaths': (_lnrpc_BlindedPaymentPath)[];
}
