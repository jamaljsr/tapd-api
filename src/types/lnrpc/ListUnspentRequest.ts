// Original file: protos/lightning.proto


export interface ListUnspentRequestPartial {
  'minConfs'?: (number);
  'maxConfs'?: (number);
  'account'?: (string);
}

export interface ListUnspentRequest {
  'minConfs': (number);
  'maxConfs': (number);
  'account': (string);
}
