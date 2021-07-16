import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor() { }

  encrypt(text : string) : string{
    return CryptoJS.AES.encrypt(text, environment.cryptoKey.trim()).toString();
  }

  decrypt(text : string) : string{
    return CryptoJS.AES.decrypt(text, environment.cryptoKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}
