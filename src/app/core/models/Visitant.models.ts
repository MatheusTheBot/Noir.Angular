export interface Visitant {
  id: number;
  fullName: string;
  birthDate: string;
  document: string;
  canEnter: boolean;

  [key: string]: string | number | boolean;
}
