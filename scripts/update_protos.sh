#! /bin/bash

curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/v0.3.3/taprpc/taprootassets.proto > protos/taprootassets.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/v0.3.3/taprpc/assetwalletrpc/assetwallet.proto > protos/assetwallet.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/v0.3.3/taprpc/mintrpc/mint.proto > protos/mint.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/v0.3.3/taprpc/universerpc/universe.proto > protos/universe.proto
