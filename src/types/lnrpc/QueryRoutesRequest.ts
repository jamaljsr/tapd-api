// Original file: protos/lightning.proto

import type { FeeLimitPartial as _lnrpc_FeeLimitPartial, FeeLimit as _lnrpc_FeeLimit } from '../lnrpc/FeeLimit';
import type { EdgeLocatorPartial as _lnrpc_EdgeLocatorPartial, EdgeLocator as _lnrpc_EdgeLocator } from '../lnrpc/EdgeLocator';
import type { NodePairPartial as _lnrpc_NodePairPartial, NodePair as _lnrpc_NodePair } from '../lnrpc/NodePair';
import type { RouteHintPartial as _lnrpc_RouteHintPartial, RouteHint as _lnrpc_RouteHint } from '../lnrpc/RouteHint';
import type { FeatureBitPartial as _lnrpc_FeatureBitPartial, FeatureBit as _lnrpc_FeatureBit } from '../lnrpc/FeatureBit';
import type { BlindedPaymentPathPartial as _lnrpc_BlindedPaymentPathPartial, BlindedPaymentPath as _lnrpc_BlindedPaymentPath } from '../lnrpc/BlindedPaymentPath';
import type { Long } from '@grpc/proto-loader';

export interface QueryRoutesRequestPartial {
  'pubKey'?: (string);
  'amt'?: (number | string | Long);
  'finalCltvDelta'?: (number);
  'feeLimit'?: (_lnrpc_FeeLimitPartial | null);
  'ignoredNodes'?: (Buffer | Uint8Array | string)[];
  'ignoredEdges'?: (_lnrpc_EdgeLocatorPartial)[];
  'sourcePubKey'?: (string);
  'useMissionControl'?: (boolean);
  'ignoredPairs'?: (_lnrpc_NodePairPartial)[];
  'cltvLimit'?: (number);
  'amtMsat'?: (number | string | Long);
  'destCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'outgoingChanId'?: (number | string | Long);
  'lastHopPubkey'?: (Buffer | Uint8Array | string);
  'routeHints'?: (_lnrpc_RouteHintPartial)[];
  'destFeatures'?: (_lnrpc_FeatureBitPartial)[];
  'timePref'?: (number | string);
  'blindedPaymentPaths'?: (_lnrpc_BlindedPaymentPathPartial)[];
}

export interface QueryRoutesRequest {
  'pubKey': (string);
  'amt': (string);
  'finalCltvDelta': (number);
  'feeLimit': (_lnrpc_FeeLimit | null);
  'ignoredNodes': (Buffer)[];
  'ignoredEdges': (_lnrpc_EdgeLocator)[];
  'sourcePubKey': (string);
  'useMissionControl': (boolean);
  'ignoredPairs': (_lnrpc_NodePair)[];
  'cltvLimit': (number);
  'amtMsat': (string);
  'destCustomRecords': ({[key: number]: Buffer});
  'outgoingChanId': (string);
  'lastHopPubkey': (Buffer);
  'routeHints': (_lnrpc_RouteHint)[];
  'destFeatures': (_lnrpc_FeatureBit)[];
  'timePref': (number);
  'blindedPaymentPaths': (_lnrpc_BlindedPaymentPath)[];
}
