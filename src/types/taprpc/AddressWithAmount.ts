// Original file: protos/taprootassets.proto

import type { Long } from '@grpc/proto-loader';

export interface AddressWithAmountPartial {
  'tapAddr'?: (string);
  'amount'?: (number | string | Long);
}

export interface AddressWithAmount {
  'tapAddr': (string);
  'amount': (string);
}
