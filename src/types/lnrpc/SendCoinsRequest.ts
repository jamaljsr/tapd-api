// Original file: protos/lightning.proto

import type { CoinSelectionStrategyPartial as _lnrpc_CoinSelectionStrategyPartial, CoinSelectionStrategy as _lnrpc_CoinSelectionStrategy } from '../lnrpc/CoinSelectionStrategy';
import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface SendCoinsRequestPartial {
  'addr'?: (string);
  'amount'?: (number | string | Long);
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'satPerByte'?: (number | string | Long);
  'sendAll'?: (boolean);
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'coinSelectionStrategy'?: (_lnrpc_CoinSelectionStrategyPartial);
  'outpoints'?: (_lnrpc_OutPointPartial)[];
}

export interface SendCoinsRequest {
  'addr': (string);
  'amount': (string);
  'targetConf': (number);
  'satPerVbyte': (string);
  'satPerByte': (string);
  'sendAll': (boolean);
  'label': (string);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'coinSelectionStrategy': (_lnrpc_CoinSelectionStrategy);
  'outpoints': (_lnrpc_OutPoint)[];
}
