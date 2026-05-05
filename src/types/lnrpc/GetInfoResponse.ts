// Original file: protos/lightning.proto

import type { ChainPartial as _lnrpc_ChainPartial, Chain as _lnrpc_Chain } from '../lnrpc/Chain';
import type { FeaturePartial as _lnrpc_FeaturePartial, Feature as _lnrpc_Feature } from '../lnrpc/Feature';
import type { GraphCacheStatusPartial as _lnrpc_GraphCacheStatusPartial, GraphCacheStatus as _lnrpc_GraphCacheStatus } from '../lnrpc/GraphCacheStatus';
import type { Long } from '@grpc/proto-loader';

export interface GetInfoResponsePartial {
  'identityPubkey'?: (string);
  'alias'?: (string);
  'numPendingChannels'?: (number);
  'numActiveChannels'?: (number);
  'numPeers'?: (number);
  'blockHeight'?: (number);
  'blockHash'?: (string);
  'syncedToChain'?: (boolean);
  'testnet'?: (boolean);
  'uris'?: (string)[];
  'bestHeaderTimestamp'?: (number | string | Long);
  'version'?: (string);
  'numInactiveChannels'?: (number);
  'chains'?: (_lnrpc_ChainPartial)[];
  'color'?: (string);
  'syncedToGraph'?: (boolean);
  'features'?: ({[key: number]: _lnrpc_FeaturePartial});
  'commitHash'?: (string);
  'requireHtlcInterceptor'?: (boolean);
  'storeFinalHtlcResolutions'?: (boolean);
  'walletSynced'?: (boolean);
  'graphCacheStatus'?: (_lnrpc_GraphCacheStatusPartial);
}

export interface GetInfoResponse {
  'identityPubkey': (string);
  'alias': (string);
  'numPendingChannels': (number);
  'numActiveChannels': (number);
  'numPeers': (number);
  'blockHeight': (number);
  'blockHash': (string);
  'syncedToChain': (boolean);
  'testnet': (boolean);
  'uris': (string)[];
  'bestHeaderTimestamp': (string);
  'version': (string);
  'numInactiveChannels': (number);
  'chains': (_lnrpc_Chain)[];
  'color': (string);
  'syncedToGraph': (boolean);
  'features': ({[key: number]: _lnrpc_Feature});
  'commitHash': (string);
  'requireHtlcInterceptor': (boolean);
  'storeFinalHtlcResolutions': (boolean);
  'walletSynced': (boolean);
  'graphCacheStatus': (_lnrpc_GraphCacheStatus);
}
