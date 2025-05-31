// Original file: protos/taprootassets.proto

export const ScriptKeyType = {
  SCRIPT_KEY_UNKNOWN: 'SCRIPT_KEY_UNKNOWN',
  SCRIPT_KEY_BIP86: 'SCRIPT_KEY_BIP86',
  SCRIPT_KEY_SCRIPT_PATH_EXTERNAL: 'SCRIPT_KEY_SCRIPT_PATH_EXTERNAL',
  SCRIPT_KEY_BURN: 'SCRIPT_KEY_BURN',
  SCRIPT_KEY_TOMBSTONE: 'SCRIPT_KEY_TOMBSTONE',
  SCRIPT_KEY_CHANNEL: 'SCRIPT_KEY_CHANNEL',
} as const;

export type ScriptKeyTypePartial =
  | 'SCRIPT_KEY_UNKNOWN'
  | 0
  | 'SCRIPT_KEY_BIP86'
  | 1
  | 'SCRIPT_KEY_SCRIPT_PATH_EXTERNAL'
  | 2
  | 'SCRIPT_KEY_BURN'
  | 3
  | 'SCRIPT_KEY_TOMBSTONE'
  | 4
  | 'SCRIPT_KEY_CHANNEL'
  | 5

export type ScriptKeyType = typeof ScriptKeyType[keyof typeof ScriptKeyType]
