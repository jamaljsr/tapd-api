// Original file: protos/lightning.proto

import type { CoinSelectionStrategyPartial as _lnrpc_CoinSelectionStrategyPartial, CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface EstimateFeeRequestPartial {
  'AddrToAmount'?: ({[key: string]: number | string | Long});
  'targetConf'?: (number);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'coinSelectionStrategy'?: (_lnrpc_CoinSelectionStrategyPartial);
}

export interface EstimateFeeRequest {
  'AddrToAmount': ({[key: string]: string});
  'targetConf': (number);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'coinSelectionStrategy': (_lnrpc_CoinSelectionStrategy);
}
