// Original file: protos/lightning.proto

import type { WalletAccountBalancePartial as _lnrpc_WalletAccountBalancePartial, WalletAccountBalance as _lnrpc_WalletAccountBalance } from '../lnrpc/WalletAccountBalance';
import type { Long } from '@grpc/proto-loader';

export interface WalletBalanceResponsePartial {
  'totalBalance'?: (number | string | Long);
  'confirmedBalance'?: (number | string | Long);
  'unconfirmedBalance'?: (number | string | Long);
  'accountBalance'?: ({[key: string]: _lnrpc_WalletAccountBalancePartial});
  'lockedBalance'?: (number | string | Long);
  'reservedBalanceAnchorChan'?: (number | string | Long);
}

export interface WalletBalanceResponse {
  'totalBalance': (string);
  'confirmedBalance': (string);
  'unconfirmedBalance': (string);
  'accountBalance': ({[key: string]: _lnrpc_WalletAccountBalance});
  'lockedBalance': (string);
  'reservedBalanceAnchorChan': (string);
}
