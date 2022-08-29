import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrinterService {
  URL_API = 'https://apiolive.olivos.cl/api/v1/fields';

  constructor(private http: HttpClient) {}

  getPrinters() {
    // return this.http.get(this.URL_API);
    return [];
  }
}
