export interface Visitant {
  id: number;
  fullName: string;
  birthDate: Date;
  document: string;
  canEnter: boolean;

  [key: string]: string | number | Date | boolean;
}
