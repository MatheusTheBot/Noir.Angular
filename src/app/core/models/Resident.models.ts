export interface Resident {
  id: number;
  fullName: string;
  birthDate: Date;
  document: string;

  [key: string]: string | number | Date;
}
