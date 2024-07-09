// Original file: protos/taprootassets.proto

export const ParcelType = {
  PARCEL_TYPE_ADDRESS: 'PARCEL_TYPE_ADDRESS',
  PARCEL_TYPE_PRE_SIGNED: 'PARCEL_TYPE_PRE_SIGNED',
  PARCEL_TYPE_PENDING: 'PARCEL_TYPE_PENDING',
  PARCEL_TYPE_PRE_ANCHORED: 'PARCEL_TYPE_PRE_ANCHORED',
} as const;

export type ParcelTypePartial =
  | 'PARCEL_TYPE_ADDRESS'
  | 0
  | 'PARCEL_TYPE_PRE_SIGNED'
  | 1
  | 'PARCEL_TYPE_PENDING'
  | 2
  | 'PARCEL_TYPE_PRE_ANCHORED'
  | 3

export type ParcelType = typeof ParcelType[keyof typeof ParcelType]
