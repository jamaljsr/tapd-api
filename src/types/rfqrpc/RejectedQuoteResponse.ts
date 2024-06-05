// Original file: protos/rfq.proto


export interface RejectedQuoteResponsePartial {
  'peer'?: (string);
  'id'?: (Buffer | Uint8Array | string);
  'errorMessage'?: (string);
  'errorCode'?: (number);
}

export interface RejectedQuoteResponse {
  'peer': (string);
  'id': (Buffer);
  'errorMessage': (string);
  'errorCode': (number);
}
