// Original file: protos/lightning.proto


// Original file: protos/lightning.proto

export const _lnrpc_PeerEvent_EventType = {
  PEER_ONLINE: 'PEER_ONLINE',
  PEER_OFFLINE: 'PEER_OFFLINE',
} as const;

export type _lnrpc_PeerEvent_EventTypePartial =
  | 'PEER_ONLINE'
  | 0
  | 'PEER_OFFLINE'
  | 1

export type _lnrpc_PeerEvent_EventType = typeof _lnrpc_PeerEvent_EventType[keyof typeof _lnrpc_PeerEvent_EventType]

export interface PeerEventPartial {
  'pubKey'?: (string);
  'type'?: (_lnrpc_PeerEvent_EventTypePartial);
}

export interface PeerEvent {
  'pubKey': (string);
  'type': (_lnrpc_PeerEvent_EventType);
}
