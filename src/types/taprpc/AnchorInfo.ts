// Original file: protos/taprootassets.proto


export interface AnchorInfoPartial {
  'anchorTx'?: (Buffer | Uint8Array | string);
  'anchorTxid'?: (string);
  'anchorBlockHash'?: (string);
  'anchorOutpoint'?: (string);
  'internalKey'?: (Buffer | Uint8Array | string);
  'merkleRoot'?: (Buffer | Uint8Array | string);
  'tapscriptSibling'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
}

export interface AnchorInfo {
  'anchorTx': (Buffer);
  'anchorTxid': (string);
  'anchorBlockHash': (string);
  'anchorOutpoint': (string);
  'internalKey': (Buffer);
  'merkleRoot': (Buffer);
  'tapscriptSibling': (Buffer);
  'blockHeight': (number);
}
