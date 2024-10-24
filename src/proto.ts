import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import Path from 'path';
import { TapdClientOptions } from './';

export const loadProto = <T>(
  protoFileName: string,
  options: TapdClientOptions
): {
  proto: T;
  credentials: grpc.ChannelCredentials;
  params: grpc.ClientOptions;
} => {
  const callCredentials = grpc.credentials.createFromMetadataGenerator(
    (_: any, callback: (arg0: null, arg1: any) => any) => {
      const metadata = new grpc.Metadata();

      metadata.add('macaroon', options.macaroon);

      return callback(null, metadata);
    }
  );

  const channelCredentials = grpc.credentials.createSsl(
    Buffer.from(options.cert, 'hex')
  );

  const credentials = grpc.credentials.combineChannelCredentials(
    channelCredentials,
    callCredentials
  );

  const debugInterceptor: grpc.Interceptor = (options, next) => {
    return new grpc.InterceptingCall(next(options), {
      start: function (metadata, listener, next) {
        next(metadata, {
          onReceiveMetadata: function (metadata, next) {
            console.log('Received metadata:', metadata);
            next(metadata);
          },
          onReceiveMessage: function (message, next) {
            console.log('Received message:', message);
            next(message);
          },
          onReceiveStatus: function (status, next) {
            console.log('Received status:', status);
            next(status);
          },
        });
      },
    });
  };

  const params: grpc.ClientOptions = {
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1,
    interceptors: [debugInterceptor],
  };

  const protosDir = Path.join(__dirname, '../protos');
  const protoPath = Path.join(protosDir, protoFileName);
  const dirName = Path.dirname(protoPath);
  const fileName = Path.basename(protoPath);
  console.log({ protosDir, protoPath, dirName, fileName });
  const packageDefinition = protoLoader.loadSync(fileName, {
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [protosDir, dirName],
  });
  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as T;

  return { proto, credentials, params };
};
