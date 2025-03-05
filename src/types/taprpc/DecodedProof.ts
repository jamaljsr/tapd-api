// Original file: protos/taprootassets.proto

import type { AssetPartial as _taprpc_AssetPartial, Asset as _taprpc_Asset } from '../taprpc/Asset';
import type { AssetMetaPartial as _taprpc_AssetMetaPartial, AssetMeta as _taprpc_AssetMeta } from '../taprpc/AssetMeta';
import type { GenesisRevealPartial as _taprpc_GenesisRevealPartial, GenesisReveal as _taprpc_GenesisReveal } from '../taprpc/GenesisReveal';
import type { GroupKeyRevealPartial as _taprpc_GroupKeyRevealPartial, GroupKeyReveal as _taprpc_GroupKeyReveal } from '../taprpc/GroupKeyReveal';

export interface DecodedProofPartial {
  'proofAtDepth'?: (number);
  'numberOfProofs'?: (number);
  'asset'?: (_taprpc_AssetPartial | null);
  'metaReveal'?: (_taprpc_AssetMetaPartial | null);
  'txMerkleProof'?: (Buffer | Uint8Array | string);
  'inclusionProof'?: (Buffer | Uint8Array | string);
  'exclusionProofs'?: (Buffer | Uint8Array | string)[];
  'splitRootProof'?: (Buffer | Uint8Array | string);
  'numAdditionalInputs'?: (number);
  'challengeWitness'?: (Buffer | Uint8Array | string)[];
  'isBurn'?: (boolean);
  'genesisReveal'?: (_taprpc_GenesisRevealPartial | null);
  'groupKeyReveal'?: (_taprpc_GroupKeyRevealPartial | null);
  'altLeaves'?: (Buffer | Uint8Array | string);
}

export interface DecodedProof {
  'proofAtDepth': (number);
  'numberOfProofs': (number);
  'asset': (_taprpc_Asset | null);
  'metaReveal': (_taprpc_AssetMeta | null);
  'txMerkleProof': (Buffer);
  'inclusionProof': (Buffer);
  'exclusionProofs': (Buffer)[];
  'splitRootProof': (Buffer);
  'numAdditionalInputs': (number);
  'challengeWitness': (Buffer)[];
  'isBurn': (boolean);
  'genesisReveal': (_taprpc_GenesisReveal | null);
  'groupKeyReveal': (_taprpc_GroupKeyReveal | null);
  'altLeaves': (Buffer);
}
