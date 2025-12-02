// Original file: protos/universerpc/universe.proto


export interface UpdateSupplyCommitRequestPartial {
  'groupKeyBytes'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'groupKey'?: "groupKeyBytes"|"groupKeyStr";
}

export interface UpdateSupplyCommitRequest {
  'groupKeyBytes'?: (Buffer);
  'groupKeyStr'?: (string);
  'groupKey': "groupKeyBytes"|"groupKeyStr";
}
