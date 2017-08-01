import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlbumsService {

  constructor(private http: Http) {}
      getHTTP() {
        return this.http.get('https://jsonplaceholder.typicode.com/albums').map(
          response =>  response.json());
  }
} 