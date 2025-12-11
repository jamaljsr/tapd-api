// Original file: protos/taprootassets.proto

import type { AddressWithAmountPartial as _taprpc_AddressWithAmountPartial, AddressWithAmount as _taprpc_AddressWithAmount } from '../taprpc/AddressWithAmount';

export interface SendAssetRequestPartial {
  'tapAddrs'?: (string)[];
  'feeRate'?: (number);
  'label'?: (string);
  'skipProofCourierPingCheck'?: (boolean);
  'addressesWithAmounts'?: (_taprpc_AddressWithAmountPartial)[];
}

export interface SendAssetRequest {
  'tapAddrs': (string)[];
  'feeRate': (number);
  'label': (string);
  'skipProofCourierPingCheck': (boolean);
  'addressesWithAmounts': (_taprpc_AddressWithAmount)[];
}
