// Original file: protos/routerrpc/router.proto

export const ResolveHoldForwardAction = {
  SETTLE: 'SETTLE',
  FAIL: 'FAIL',
  RESUME: 'RESUME',
} as const;

export type ResolveHoldForwardActionPartial =
  | 'SETTLE'
  | 0
  | 'FAIL'
  | 1
  | 'RESUME'
  | 2

export type ResolveHoldForwardAction = typeof ResolveHoldForwardAction[keyof typeof ResolveHoldForwardAction]
