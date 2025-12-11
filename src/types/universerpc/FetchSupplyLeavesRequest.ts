// Original file: protos/universerpc/universe.proto


export interface FetchSupplyLeavesRequestPartial {
  'groupKeyBytes'?: (Buffer | Uint8Array | string);
  'groupKeyStr'?: (string);
  'blockHeightStart'?: (number);
  'blockHeightEnd'?: (number);
  'issuanceLeafKeys'?: (Buffer | Uint8Array | string)[];
  'burnLeafKeys'?: (Buffer | Uint8Array | string)[];
  'ignoreLeafKeys'?: (Buffer | Uint8Array | string)[];
  'groupKey'?: "groupKeyBytes"|"groupKeyStr";
}

export interface FetchSupplyLeavesRequest {
  'groupKeyBytes'?: (Buffer);
  'groupKeyStr'?: (string);
  'blockHeightStart': (number);
  'blockHeightEnd': (number);
  'issuanceLeafKeys': (Buffer)[];
  'burnLeafKeys': (Buffer)[];
  'ignoreLeafKeys': (Buffer)[];
  'groupKey': "groupKeyBytes"|"groupKeyStr";
}
