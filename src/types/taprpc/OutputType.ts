// Original file: protos/taprootassets.proto

export const OutputType = {
  OUTPUT_TYPE_SIMPLE: 'OUTPUT_TYPE_SIMPLE',
  OUTPUT_TYPE_SPLIT_ROOT: 'OUTPUT_TYPE_SPLIT_ROOT',
} as const;

export type OutputTypePartial =
  | 'OUTPUT_TYPE_SIMPLE'
  | 0
  | 'OUTPUT_TYPE_SPLIT_ROOT'
  | 1

export type OutputType = typeof OutputType[keyof typeof OutputType]
