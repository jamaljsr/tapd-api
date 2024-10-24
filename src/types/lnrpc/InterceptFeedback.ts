// Original file: protos/lightning.proto


export interface InterceptFeedbackPartial {
  'error'?: (string);
  'replaceResponse'?: (boolean);
  'replacementSerialized'?: (Buffer | Uint8Array | string);
}

export interface InterceptFeedback {
  'error': (string);
  'replaceResponse': (boolean);
  'replacementSerialized': (Buffer);
}
