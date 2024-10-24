// Original file: protos/lightning.proto


export interface AMPRecordPartial {
  'rootShare'?: (Buffer | Uint8Array | string);
  'setId'?: (Buffer | Uint8Array | string);
  'childIndex'?: (number);
}

export interface AMPRecord {
  'rootShare': (Buffer);
  'setId': (Buffer);
  'childIndex': (number);
}
