// Original file: protos/taprootassets.proto


export interface GetInfoResponsePartial {
  'version'?: (string);
  'lndVersion'?: (string);
  'network'?: (string);
  'lndIdentityPubkey'?: (string);
  'nodeAlias'?: (string);
  'blockHeight'?: (number);
  'blockHash'?: (string);
  'syncToChain'?: (boolean);
}

export interface GetInfoResponse {
  'version': (string);
  'lndVersion': (string);
  'network': (string);
  'lndIdentityPubkey': (string);
  'nodeAlias': (string);
  'blockHeight': (number);
  'blockHash': (string);
  'syncToChain': (boolean);
}
