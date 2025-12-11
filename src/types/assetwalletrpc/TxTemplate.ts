// Original file: protos/assetwalletrpc/assetwallet.proto

import type { PrevIdPartial as _assetwalletrpc_PrevIdPartial, PrevId as _assetwalletrpc_PrevId } from '../assetwalletrpc/PrevId';
import type { AddressWithAmountPartial as _taprpc_AddressWithAmountPartial, AddressWithAmount as _taprpc_AddressWithAmount } from '../taprpc/AddressWithAmount';
import type { Long } from '@grpc/proto-loader';

export interface TxTemplatePartial {
  'inputs'?: (_assetwalletrpc_PrevIdPartial)[];
  'recipients'?: ({[key: string]: number | string | Long});
  'addressesWithAmounts'?: (_taprpc_AddressWithAmountPartial)[];
}

export interface TxTemplate {
  'inputs': (_assetwalletrpc_PrevId)[];
  'recipients': ({[key: string]: string});
  'addressesWithAmounts': (_taprpc_AddressWithAmount)[];
}
