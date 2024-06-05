import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TaprootAssetChannelsClient as _tapchannelrpc_TaprootAssetChannelsClient, TaprootAssetChannelsDefinition as _tapchannelrpc_TaprootAssetChannelsDefinition } from './tapchannelrpc/TaprootAssetChannels';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  tapchannelrpc: {
    EncodeCustomRecordsRequest: MessageTypeDefinition
    EncodeCustomRecordsResponse: MessageTypeDefinition
    FundChannelRequest: MessageTypeDefinition
    FundChannelResponse: MessageTypeDefinition
    RouterSendPaymentData: MessageTypeDefinition
    TaprootAssetChannels: SubtypeConstructor<typeof grpc.Client, _tapchannelrpc_TaprootAssetChannelsClient> & { service: _tapchannelrpc_TaprootAssetChannelsDefinition }
  }
}

