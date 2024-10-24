// Original file: protos/lightning.proto


export interface GetDebugInfoResponsePartial {
  'config'?: ({[key: string]: string});
  'log'?: (string)[];
}

export interface GetDebugInfoResponse {
  'config': ({[key: string]: string});
  'log': (string)[];
}
