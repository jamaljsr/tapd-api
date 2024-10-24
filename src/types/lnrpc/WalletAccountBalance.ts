// Original file: protos/lightning.proto

import type { Long } from '@grpc/proto-loader';

export interface WalletAccountBalancePartial {
  'confirmedBalance'?: (number | string | Long);
  'unconfirmedBalance'?: (number | string | Long);
}

export interface WalletAccountBalance {
  'confirmedBalance': (string);
  'unconfirmedBalance': (string);
}
