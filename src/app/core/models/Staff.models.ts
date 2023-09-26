export interface Staff {
  id: number;
  fullName: string;
  birthDate: string;
  document: string;
  employer: string;
  canEnter: boolean;

  [key: string]: string | number | boolean;
}
