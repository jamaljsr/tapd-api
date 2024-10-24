// Original file: protos/lightning.proto

import type { ChanPointShimPartial as _lnrpc_ChanPointShimPartial, ChanPointShim as _lnrpc_ChanPointShim } from '../lnrpc/ChanPointShim';
import type { PsbtShimPartial as _lnrpc_PsbtShimPartial, PsbtShim as _lnrpc_PsbtShim } from '../lnrpc/PsbtShim';

export interface FundingShimPartial {
  'chanPointShim'?: (_lnrpc_ChanPointShimPartial | null);
  'psbtShim'?: (_lnrpc_PsbtShimPartial | null);
  'shim'?: "chanPointShim"|"psbtShim";
}

export interface FundingShim {
  'chanPointShim'?: (_lnrpc_ChanPointShim | null);
  'psbtShim'?: (_lnrpc_PsbtShim | null);
  'shim': "chanPointShim"|"psbtShim";
}
