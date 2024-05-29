#! /bin/bash

curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/custom-channels-poc/taprpc/taprootassets.proto > protos/taprootassets.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/custom-channels-poc/taprpc/assetwalletrpc/assetwallet.proto > protos/assetwallet.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/custom-channels-poc/taprpc/mintrpc/mint.proto > protos/mint.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/custom-channels-poc/taprpc/rfqrpc/rfq.proto > protos/rfq.proto
curl https://raw.githubusercontent.com/lightninglabs/taproot-assets/custom-channels-poc/taprpc/universerpc/universe.proto > protos/universe.proto
