// Original file: protos/lightning.proto

export const NodeMetricType = {
  UNKNOWN: 'UNKNOWN',
  BETWEENNESS_CENTRALITY: 'BETWEENNESS_CENTRALITY',
} as const;

export type NodeMetricTypePartial =
  | 'UNKNOWN'
  | 0
  | 'BETWEENNESS_CENTRALITY'
  | 1

export type NodeMetricType = typeof NodeMetricType[keyof typeof NodeMetricType]
