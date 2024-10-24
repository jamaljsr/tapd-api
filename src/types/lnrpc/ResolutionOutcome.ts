// Original file: protos/lightning.proto

export const ResolutionOutcome = {
  OUTCOME_UNKNOWN: 'OUTCOME_UNKNOWN',
  CLAIMED: 'CLAIMED',
  UNCLAIMED: 'UNCLAIMED',
  ABANDONED: 'ABANDONED',
  FIRST_STAGE: 'FIRST_STAGE',
  TIMEOUT: 'TIMEOUT',
} as const;

export type ResolutionOutcomePartial =
  | 'OUTCOME_UNKNOWN'
  | 0
  | 'CLAIMED'
  | 1
  | 'UNCLAIMED'
  | 2
  | 'ABANDONED'
  | 3
  | 'FIRST_STAGE'
  | 4
  | 'TIMEOUT'
  | 5

export type ResolutionOutcome = typeof ResolutionOutcome[keyof typeof ResolutionOutcome]
