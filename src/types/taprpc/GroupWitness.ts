// Original file: protos/taprootassets.proto


export interface GroupWitnessPartial {
  'genesisId'?: (Buffer | Uint8Array | string);
  'witness'?: (Buffer | Uint8Array | string)[];
}

export interface GroupWitness {
  'genesisId': (Buffer);
  'witness': (Buffer)[];
}
