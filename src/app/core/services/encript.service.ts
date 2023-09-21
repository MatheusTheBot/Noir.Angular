import { Injectable } from '@angular/core';
const Crypto = require('crypto-js');

@Injectable({
  providedIn: 'root',
})
export class EncriptService {
  constructor() {}

  public hash(password: string): string {
    return Crypto.SHA256(password).toString();
  }
}
