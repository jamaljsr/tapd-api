// Original file: protos/lightning.proto

import type { BlindedPathPartial as _lnrpc_BlindedPathPartial, BlindedPath as _lnrpc_BlindedPath } from '../lnrpc/BlindedPath';
import type { FeatureBitPartial as _lnrpc_FeatureBitPartial, FeatureBit as _lnrpc_FeatureBit } from '../lnrpc/FeatureBit';
import type { Long } from '@grpc/proto-loader';

export interface BlindedPaymentPathPartial {
  'blindedPath'?: (_lnrpc_BlindedPathPartial | null);
  'baseFeeMsat'?: (number | string | Long);
  'proportionalFeeRate'?: (number);
  'totalCltvDelta'?: (number);
  'htlcMinMsat'?: (number | string | Long);
  'htlcMaxMsat'?: (number | string | Long);
  'features'?: (_lnrpc_FeatureBitPartial)[];
}

export interface BlindedPaymentPath {
  'blindedPath': (_lnrpc_BlindedPath | null);
  'baseFeeMsat': (string);
  'proportionalFeeRate': (number);
  'totalCltvDelta': (number);
  'htlcMinMsat': (string);
  'htlcMaxMsat': (string);
  'features': (_lnrpc_FeatureBit)[];
}
