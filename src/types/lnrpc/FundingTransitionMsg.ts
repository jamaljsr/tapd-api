// Original file: protos/lightning.proto

import type { FundingShimPartial as _lnrpc_FundingShimPartial, FundingShim as _lnrpc_FundingShim } from '../lnrpc/FundingShim';
import type { FundingShimCancelPartial as _lnrpc_FundingShimCancelPartial, FundingShimCancel as _lnrpc_FundingShimCancel } from '../lnrpc/FundingShimCancel';
import type { FundingPsbtVerifyPartial as _lnrpc_FundingPsbtVerifyPartial, FundingPsbtVerify as _lnrpc_FundingPsbtVerify } from '../lnrpc/FundingPsbtVerify';
import type { FundingPsbtFinalizePartial as _lnrpc_FundingPsbtFinalizePartial, FundingPsbtFinalize as _lnrpc_FundingPsbtFinalize } from '../lnrpc/FundingPsbtFinalize';

export interface FundingTransitionMsgPartial {
  'shimRegister'?: (_lnrpc_FundingShimPartial | null);
  'shimCancel'?: (_lnrpc_FundingShimCancelPartial | null);
  'psbtVerify'?: (_lnrpc_FundingPsbtVerifyPartial | null);
  'psbtFinalize'?: (_lnrpc_FundingPsbtFinalizePartial | null);
  'trigger'?: "shimRegister"|"shimCancel"|"psbtVerify"|"psbtFinalize";
}

export interface FundingTransitionMsg {
  'shimRegister'?: (_lnrpc_FundingShim | null);
  'shimCancel'?: (_lnrpc_FundingShimCancel | null);
  'psbtVerify'?: (_lnrpc_FundingPsbtVerify | null);
  'psbtFinalize'?: (_lnrpc_FundingPsbtFinalize | null);
  'trigger': "shimRegister"|"shimCancel"|"psbtVerify"|"psbtFinalize";
}
