import { Injectable } from '@angular/core';
const { sha256 } = require('crypto-js/sha256');

@Injectable({
  providedIn: 'root',
})
export class EncriptService {
  constructor() {}

  public hash(password: string): string {
    return sha256(password).toString();
  }
}
