// Original file: protos/lightning.proto

import type { FeeLimitPartial as _lnrpc_FeeLimitPartial, FeeLimit as _lnrpc_FeeLimit } from '../lnrpc/FeeLimit';
import type { FeatureBitPartial as _lnrpc_FeatureBitPartial, FeatureBit as _lnrpc_FeatureBit } from '../lnrpc/FeatureBit';
import type { Long } from '@grpc/proto-loader';

export interface SendRequestPartial {
  'dest'?: (Buffer | Uint8Array | string);
  'destString'?: (string);
  'amt'?: (number | string | Long);
  'paymentHash'?: (Buffer | Uint8Array | string);
  'paymentHashString'?: (string);
  'paymentRequest'?: (string);
  'finalCltvDelta'?: (number);
  'feeLimit'?: (_lnrpc_FeeLimitPartial | null);
  'outgoingChanId'?: (number | string | Long);
  'cltvLimit'?: (number);
  'destCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'amtMsat'?: (number | string | Long);
  'lastHopPubkey'?: (Buffer | Uint8Array | string);
  'allowSelfPayment'?: (boolean);
  'destFeatures'?: (_lnrpc_FeatureBitPartial)[];
  'paymentAddr'?: (Buffer | Uint8Array | string);
}

export interface SendRequest {
  'dest': (Buffer);
  'destString': (string);
  'amt': (string);
  'paymentHash': (Buffer);
  'paymentHashString': (string);
  'paymentRequest': (string);
  'finalCltvDelta': (number);
  'feeLimit': (_lnrpc_FeeLimit | null);
  'outgoingChanId': (string);
  'cltvLimit': (number);
  'destCustomRecords': ({[key: number]: Buffer});
  'amtMsat': (string);
  'lastHopPubkey': (Buffer);
  'allowSelfPayment': (boolean);
  'destFeatures': (_lnrpc_FeatureBit)[];
  'paymentAddr': (Buffer);
}
