// Original file: protos/lightning.proto

import type { BatchOpenChannelPartial as _lnrpc_BatchOpenChannelPartial, BatchOpenChannel as _lnrpc_BatchOpenChannel } from '../lnrpc/BatchOpenChannel';
import type { CoinSelectionStrategyPartial as _lnrpc_CoinSelectionStrategyPartial, CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface BatchOpenChannelRequestPartial {
  'channels'?: (_lnrpc_BatchOpenChannelPartial)[];
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'label'?: (string);
  'coinSelectionStrategy'?: (_lnrpc_CoinSelectionStrategyPartial);
}

export interface BatchOpenChannelRequest {
  'channels': (_lnrpc_BatchOpenChannel)[];
  'targetConf': (number);
  'satPerVbyte': (string);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'label': (string);
  'coinSelectionStrategy': (_lnrpc_CoinSelectionStrategy);
}
