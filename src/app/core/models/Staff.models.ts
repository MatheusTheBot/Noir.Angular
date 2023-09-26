export interface Staff {
  id: number;
  fullName: string;
  birthDate: Date;
  document: string;
  employer: string;
  canEnter: boolean;

  [key: string]: string | number | Date | boolean;
}
