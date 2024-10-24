// Original file: protos/lightning.proto


export interface KeyLocatorPartial {
  'keyFamily'?: (number);
  'keyIndex'?: (number);
}

export interface KeyLocator {
  'keyFamily': (number);
  'keyIndex': (number);
}
