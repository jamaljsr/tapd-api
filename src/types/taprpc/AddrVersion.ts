// Original file: protos/taprootassets.proto

export const AddrVersion = {
  ADDR_VERSION_UNSPECIFIED: 'ADDR_VERSION_UNSPECIFIED',
  ADDR_VERSION_V0: 'ADDR_VERSION_V0',
  ADDR_VERSION_V1: 'ADDR_VERSION_V1',
  ADDR_VERSION_V2: 'ADDR_VERSION_V2',
} as const;

export type AddrVersionPartial =
  | 'ADDR_VERSION_UNSPECIFIED'
  | 0
  | 'ADDR_VERSION_V0'
  | 1
  | 'ADDR_VERSION_V1'
  | 2
  | 'ADDR_VERSION_V2'
  | 3

export type AddrVersion = typeof AddrVersion[keyof typeof AddrVersion]
