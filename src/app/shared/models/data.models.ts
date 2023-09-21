import { DataHeader } from './dataHeader.models';

export interface Data<T> {
  title: string;
  headers: DataHeader;
  content?: T[];
}
