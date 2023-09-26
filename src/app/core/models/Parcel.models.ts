import { ParcelType } from '../enums/parcelType.enums';

export interface Parcel {
  id: number;
  type: ParcelType;
  description: string;
  from: string;
  for: string;
  arrivedDate: Date;

  [key: string]: string | number | ParcelType | Date;
}
