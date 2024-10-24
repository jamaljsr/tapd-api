// Original file: protos/lightning.proto

import type { ResolutionTypePartial as _lnrpc_ResolutionTypePartial, ResolutionType as _lnrpc_ResolutionType } from '../lnrpc/ResolutionType';
import type { ResolutionOutcomePartial as _lnrpc_ResolutionOutcomePartial, ResolutionOutcome as _lnrpc_ResolutionOutcome } from '../lnrpc/ResolutionOutcome';
import type { OutPointPartial as _lnrpc_OutPointPartial, OutPoint as _lnrpc_OutPoint } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface ResolutionPartial {
  'resolutionType'?: (_lnrpc_ResolutionTypePartial);
  'outcome'?: (_lnrpc_ResolutionOutcomePartial);
  'outpoint'?: (_lnrpc_OutPointPartial | null);
  'amountSat'?: (number | string | Long);
  'sweepTxid'?: (string);
}

export interface Resolution {
  'resolutionType': (_lnrpc_ResolutionType);
  'outcome': (_lnrpc_ResolutionOutcome);
  'outpoint': (_lnrpc_OutPoint | null);
  'amountSat': (string);
  'sweepTxid': (string);
}
