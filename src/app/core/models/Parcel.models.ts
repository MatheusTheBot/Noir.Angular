export interface Parcel {
  id: number;
  type: string;
  description: string;
  from: string;
  for: string;
  arrivedDate: string;

  [key: string]: string | number;
}
