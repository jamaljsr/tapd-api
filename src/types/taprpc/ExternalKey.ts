// Original file: protos/taprootassets.proto


export interface ExternalKeyPartial {
  'xpub'?: (string);
  'masterFingerprint'?: (Buffer | Uint8Array | string);
  'derivationPath'?: (string);
}

export interface ExternalKey {
  'xpub': (string);
  'masterFingerprint': (Buffer);
  'derivationPath': (string);
}
