// Original file: protos/lightning.proto

export const GraphCacheStatus = {
  GRAPH_CACHE_STATUS_DISABLED: 'GRAPH_CACHE_STATUS_DISABLED',
  GRAPH_CACHE_STATUS_LOADING: 'GRAPH_CACHE_STATUS_LOADING',
  GRAPH_CACHE_STATUS_LOADED: 'GRAPH_CACHE_STATUS_LOADED',
  GRAPH_CACHE_STATUS_FAILED: 'GRAPH_CACHE_STATUS_FAILED',
} as const;

export type GraphCacheStatusPartial =
  | 'GRAPH_CACHE_STATUS_DISABLED'
  | 0
  | 'GRAPH_CACHE_STATUS_LOADING'
  | 1
  | 'GRAPH_CACHE_STATUS_LOADED'
  | 2
  | 'GRAPH_CACHE_STATUS_FAILED'
  | 3

export type GraphCacheStatus = typeof GraphCacheStatus[keyof typeof GraphCacheStatus]
