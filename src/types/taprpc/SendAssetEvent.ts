// Original file: protos/taprootassets.proto

import type { ExecuteSendStateEventPartial as _taprpc_ExecuteSendStateEventPartial, ExecuteSendStateEvent as _taprpc_ExecuteSendStateEvent } from '../taprpc/ExecuteSendStateEvent';
import type { ProofTransferBackoffWaitEventPartial as _taprpc_ProofTransferBackoffWaitEventPartial, ProofTransferBackoffWaitEvent as _taprpc_ProofTransferBackoffWaitEvent } from '../taprpc/ProofTransferBackoffWaitEvent';

export interface SendAssetEventPartial {
  'executeSendStateEvent'?: (_taprpc_ExecuteSendStateEventPartial | null);
  'proofTransferBackoffWaitEvent'?: (_taprpc_ProofTransferBackoffWaitEventPartial | null);
  'event'?: "executeSendStateEvent"|"proofTransferBackoffWaitEvent";
}

export interface SendAssetEvent {
  'executeSendStateEvent'?: (_taprpc_ExecuteSendStateEvent | null);
  'proofTransferBackoffWaitEvent'?: (_taprpc_ProofTransferBackoffWaitEvent | null);
  'event': "executeSendStateEvent"|"proofTransferBackoffWaitEvent";
}
