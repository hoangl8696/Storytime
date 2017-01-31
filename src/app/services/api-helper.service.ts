import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http'

@Injectable()
export class ApiHelperService {

  private baseUrl: any = 'http://media.mw.metropolia.fi/wbma/';
  private headers: Headers;
  private options: RequestOptions;
  private body: any;

  constructor(private http: Http) { }

  private headerBuilder: any = (contentType?, token?) => {
    this.headers = new Headers({});
    this.options = new RequestOptions({ headers: this.headers });
     if (contentType) {
      this.headers.append('Content-type', contentType);
    }
    if (token) {
      this.headers.append('x-access-token', token);
    }
    return this.options;
  }

  login: any = (data) => {
    const url = this.baseUrl + 'login/';
    const options = this.headerBuilder('application/json');
    const body = JSON.stringify(data);
    console.log (body);
    return this.http.post(url,body,options);
  }
}
