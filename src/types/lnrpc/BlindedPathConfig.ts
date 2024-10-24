// Original file: protos/lightning.proto


export interface BlindedPathConfigPartial {
  'minNumRealHops'?: (number);
  'numHops'?: (number);
  'maxNumPaths'?: (number);
  'nodeOmissionList'?: (Buffer | Uint8Array | string)[];
  '_minNumRealHops'?: "minNumRealHops";
  '_numHops'?: "numHops";
  '_maxNumPaths'?: "maxNumPaths";
}

export interface BlindedPathConfig {
  'minNumRealHops'?: (number);
  'numHops'?: (number);
  'maxNumPaths'?: (number);
  'nodeOmissionList': (Buffer)[];
  '_minNumRealHops': "minNumRealHops";
  '_numHops': "numHops";
  '_maxNumPaths': "maxNumPaths";
}
