import { Injectable } from '@angular/core';
const { createHash } = require('crypto');

@Injectable({
  providedIn: 'root',
})
export class EncriptService {
  constructor() {}

  public hash(password: string): string {
    return createHash('sha256').update(password).digest('hex');
  }
}
