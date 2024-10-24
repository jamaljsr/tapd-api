// Original file: protos/mintrpc/mint.proto


export interface CancelBatchResponsePartial {
  'batchKey'?: (Buffer | Uint8Array | string);
}

export interface CancelBatchResponse {
  'batchKey': (Buffer);
}
