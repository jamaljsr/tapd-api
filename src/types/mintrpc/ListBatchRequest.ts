// Original file: protos/mint.proto


export interface ListBatchRequestPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
  'batchKeyStr'?: (string);
  'filter'?: "batchKey"|"batchKeyStr";
}

export interface ListBatchRequest {
  'batchKey'?: (Buffer);
  'batchKeyStr'?: (string);
  'filter': "batchKey"|"batchKeyStr";
}
