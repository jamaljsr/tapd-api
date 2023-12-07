// Original file: protos/taprootassets.proto

import type { ProofTransferBackoffWaitEventPartial as _taprpc_ProofTransferBackoffWaitEventPartial, ProofTransferBackoffWaitEvent as _taprpc_ProofTransferBackoffWaitEvent } from '../taprpc/ProofTransferBackoffWaitEvent';
import type { AssetReceiveCompleteEventPartial as _taprpc_AssetReceiveCompleteEventPartial, AssetReceiveCompleteEvent as _taprpc_AssetReceiveCompleteEvent } from '../taprpc/AssetReceiveCompleteEvent';

export interface ReceiveAssetEventPartial {
  'proofTransferBackoffWaitEvent'?: (_taprpc_ProofTransferBackoffWaitEventPartial | null);
  'assetReceiveCompleteEvent'?: (_taprpc_AssetReceiveCompleteEventPartial | null);
  'event'?: "proofTransferBackoffWaitEvent"|"assetReceiveCompleteEvent";
}

export interface ReceiveAssetEvent {
  'proofTransferBackoffWaitEvent'?: (_taprpc_ProofTransferBackoffWaitEvent | null);
  'assetReceiveCompleteEvent'?: (_taprpc_AssetReceiveCompleteEvent | null);
  'event': "proofTransferBackoffWaitEvent"|"assetReceiveCompleteEvent";
}
