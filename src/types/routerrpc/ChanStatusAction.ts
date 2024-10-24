// Original file: protos/routerrpc/router.proto

export const ChanStatusAction = {
  ENABLE: 'ENABLE',
  DISABLE: 'DISABLE',
  AUTO: 'AUTO',
} as const;

export type ChanStatusActionPartial =
  | 'ENABLE'
  | 0
  | 'DISABLE'
  | 1
  | 'AUTO'
  | 2

export type ChanStatusAction = typeof ChanStatusAction[keyof typeof ChanStatusAction]
