// Original file: protos/lightning.proto

import type { CoinSelectionStrategyPartial as _lnrpc_CoinSelectionStrategyPartial, CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy } from '../lnrpc/CoinSelectionStrategy';
import type { Long } from '@grpc/proto-loader';

export interface SendManyRequestPartial {
  'AddrToAmount'?: ({[key: string]: number | string | Long});
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'satPerByte'?: (number | string | Long);
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'coinSelectionStrategy'?: (_lnrpc_CoinSelectionStrategyPartial);
}

export interface SendManyRequest {
  'AddrToAmount': ({[key: string]: string});
  'targetConf': (number);
  'satPerVbyte': (string);
  'satPerByte': (string);
  'label': (string);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'coinSelectionStrategy': (_lnrpc_CoinSelectionStrategy);
}
