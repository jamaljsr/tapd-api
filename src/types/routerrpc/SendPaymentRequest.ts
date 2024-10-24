// Original file: protos/routerrpc/router.proto

import type { RouteHintPartial as _lnrpc_RouteHintPartial, RouteHint as _lnrpc_RouteHint } from '../lnrpc/RouteHint';
import type { FeatureBitPartial as _lnrpc_FeatureBitPartial, FeatureBit as _lnrpc_FeatureBit } from '../lnrpc/FeatureBit';
import type { Long } from '@grpc/proto-loader';

export interface SendPaymentRequestPartial {
  'dest'?: (Buffer | Uint8Array | string);
  'amt'?: (number | string | Long);
  'paymentHash'?: (Buffer | Uint8Array | string);
  'finalCltvDelta'?: (number);
  'paymentRequest'?: (string);
  'timeoutSeconds'?: (number);
  'feeLimitSat'?: (number | string | Long);
  'outgoingChanId'?: (number | string | Long);
  'cltvLimit'?: (number);
  'routeHints'?: (_lnrpc_RouteHintPartial)[];
  'destCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'amtMsat'?: (number | string | Long);
  'feeLimitMsat'?: (number | string | Long);
  'lastHopPubkey'?: (Buffer | Uint8Array | string);
  'allowSelfPayment'?: (boolean);
  'destFeatures'?: (_lnrpc_FeatureBitPartial)[];
  'maxParts'?: (number);
  'noInflightUpdates'?: (boolean);
  'outgoingChanIds'?: (number | string | Long)[];
  'paymentAddr'?: (Buffer | Uint8Array | string);
  'maxShardSizeMsat'?: (number | string | Long);
  'amp'?: (boolean);
  'timePref'?: (number | string);
  'cancelable'?: (boolean);
  'firstHopCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface SendPaymentRequest {
  'dest': (Buffer);
  'amt': (string);
  'paymentHash': (Buffer);
  'finalCltvDelta': (number);
  'paymentRequest': (string);
  'timeoutSeconds': (number);
  'feeLimitSat': (string);
  'outgoingChanId': (string);
  'cltvLimit': (number);
  'routeHints': (_lnrpc_RouteHint)[];
  'destCustomRecords': ({[key: number]: Buffer});
  'amtMsat': (string);
  'feeLimitMsat': (string);
  'lastHopPubkey': (Buffer);
  'allowSelfPayment': (boolean);
  'destFeatures': (_lnrpc_FeatureBit)[];
  'maxParts': (number);
  'noInflightUpdates': (boolean);
  'outgoingChanIds': (string)[];
  'paymentAddr': (Buffer);
  'maxShardSizeMsat': (string);
  'amp': (boolean);
  'timePref': (number);
  'cancelable': (boolean);
  'firstHopCustomRecords': ({[key: number]: Buffer});
}
