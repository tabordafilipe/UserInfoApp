import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) {}
      getHTTP() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').map(
          response =>  response.json());
  }
}