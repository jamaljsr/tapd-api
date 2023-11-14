// Original file: protos/taprootassets.proto

import type { ProofTransferBackoffWaitEventPartial as _taprpc_ProofTransferBackoffWaitEventPartial, ProofTransferBackoffWaitEvent as _taprpc_ProofTransferBackoffWaitEvent } from '../taprpc/ProofTransferBackoffWaitEvent';

export interface ReceiveAssetEventPartial {
  'proofTransferBackoffWaitEvent'?: (_taprpc_ProofTransferBackoffWaitEventPartial | null);
  'event'?: "proofTransferBackoffWaitEvent";
}

export interface ReceiveAssetEvent {
  'proofTransferBackoffWaitEvent'?: (_taprpc_ProofTransferBackoffWaitEvent | null);
  'event': "proofTransferBackoffWaitEvent";
}
