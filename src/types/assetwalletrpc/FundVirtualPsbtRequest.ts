// Original file: protos/assetwalletrpc/assetwallet.proto

import type { TxTemplatePartial as _assetwalletrpc_TxTemplatePartial, TxTemplate as _assetwalletrpc_TxTemplate } from '../assetwalletrpc/TxTemplate';
import type { CoinSelectTypePartial as _assetwalletrpc_CoinSelectTypePartial, CoinSelectType as _assetwalletrpc_CoinSelectType } from '../assetwalletrpc/CoinSelectType';

export interface FundVirtualPsbtRequestPartial {
  'psbt'?: (Buffer | Uint8Array | string);
  'raw'?: (_assetwalletrpc_TxTemplatePartial | null);
  'coinSelectType'?: (_assetwalletrpc_CoinSelectTypePartial);
  'template'?: "psbt"|"raw";
}

export interface FundVirtualPsbtRequest {
  'psbt'?: (Buffer);
  'raw'?: (_assetwalletrpc_TxTemplate | null);
  'coinSelectType': (_assetwalletrpc_CoinSelectType);
  'template': "psbt"|"raw";
}
