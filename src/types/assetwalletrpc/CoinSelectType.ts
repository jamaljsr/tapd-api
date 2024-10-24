// Original file: protos/assetwalletrpc/assetwallet.proto

export const CoinSelectType = {
  COIN_SELECT_DEFAULT: 'COIN_SELECT_DEFAULT',
  COIN_SELECT_BIP86_ONLY: 'COIN_SELECT_BIP86_ONLY',
  COIN_SELECT_SCRIPT_TREES_ALLOWED: 'COIN_SELECT_SCRIPT_TREES_ALLOWED',
} as const;

export type CoinSelectTypePartial =
  | 'COIN_SELECT_DEFAULT'
  | 0
  | 'COIN_SELECT_BIP86_ONLY'
  | 1
  | 'COIN_SELECT_SCRIPT_TREES_ALLOWED'
  | 2

export type CoinSelectType = typeof CoinSelectType[keyof typeof CoinSelectType]
