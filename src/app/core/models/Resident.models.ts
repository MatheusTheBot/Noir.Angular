export interface Resident {
  id: number;
  fullName: string;
  birthDate: string;
  document: string;

  [key: string]: string | number;
}
