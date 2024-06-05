// Original file: protos/mint.proto


export interface ListBatchRequestPartial {
  'batchKey'?: (Buffer | Uint8Array | string);
  'batchKeyStr'?: (string);
  'verbose'?: (boolean);
  'filter'?: "batchKey"|"batchKeyStr";
}

export interface ListBatchRequest {
  'batchKey'?: (Buffer);
  'batchKeyStr'?: (string);
  'verbose': (boolean);
  'filter': "batchKey"|"batchKeyStr";
}
