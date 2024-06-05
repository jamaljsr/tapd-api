// Original file: protos/taprootassets.proto

import type { ParcelType as _taprpc_ParcelType } from '../taprpc/ParcelType';
import type { AddrPartial as _taprpc_AddrPartial, Addr as _taprpc_Addr } from '../taprpc/Addr';
import type { AnchorTransactionPartial as _taprpc_AnchorTransactionPartial, AnchorTransaction as _taprpc_AnchorTransaction } from '../taprpc/AnchorTransaction';
import type { AssetTransferPartial as _taprpc_AssetTransferPartial, AssetTransfer as _taprpc_AssetTransfer } from '../taprpc/AssetTransfer';
import type { Long } from '@grpc/proto-loader';

export interface SendEventPartial {
  'timestamp'?: (number | string | Long);
  'sendState'?: (string);
  'parcelType'?: (_taprpc_ParcelType | keyof typeof _taprpc_ParcelType);
  'addresses'?: (_taprpc_AddrPartial)[];
  'virtualPackets'?: (Buffer | Uint8Array | string)[];
  'passiveVirtualPackets'?: (Buffer | Uint8Array | string)[];
  'anchorTransaction'?: (_taprpc_AnchorTransactionPartial | null);
  'transfer'?: (_taprpc_AssetTransferPartial | null);
  'error'?: (string);
}

export interface SendEvent {
  'timestamp': (string);
  'sendState': (string);
  'parcelType': (keyof typeof _taprpc_ParcelType);
  'addresses': (_taprpc_Addr)[];
  'virtualPackets': (Buffer)[];
  'passiveVirtualPackets': (Buffer)[];
  'anchorTransaction': (_taprpc_AnchorTransaction | null);
  'transfer': (_taprpc_AssetTransfer | null);
  'error': (string);
}
