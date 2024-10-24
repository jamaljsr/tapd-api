// Original file: protos/tapchannelrpc/tapchannel.proto


export interface EncodeCustomRecordsResponsePartial {
  'customRecords'?: ({[key: number]: Buffer | Uint8Array | string});
}

export interface EncodeCustomRecordsResponse {
  'customRecords': ({[key: number]: Buffer});
}
