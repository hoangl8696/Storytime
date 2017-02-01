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
      if (contentType !== 'auto-generated') { this.headers.append('Content-type', contentType); } else { }
    } else {
      this.headers.append('Content-type', 'application/json')
    }

    if (token) {
      this.headers.append('x-access-token', token);
    }
    return this.options;
  }

  checkName: any = (username: any) => {
    const url = this.baseUrl + 'users/username/' + username;
    const options = this.headerBuilder();
    return this.http.get(url, options);
  }

  login: any = (data) => {
    const url = this.baseUrl + 'login/';
    const options = this.headerBuilder();
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(url, body, options);
  }

  signup: any = (data) => {
    const url = this.baseUrl + 'users/';
    const options = this.headerBuilder();
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(url, body, options);
  }

  modifyUser: any = (data, token: any) => {
    const url = this.baseUrl + 'users/';
    const options = this.headerBuilder('', token);
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.put(url, body, options);
  }

  getUser: any = (id: any, token: any) => {
    const url = this.baseUrl + 'users/' + id;
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getAllUsers: any = (token: any) => {
    const url = this.baseUrl + 'users/';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getCurrentUser: any = (token: any) => {
    const url = this.baseUrl + 'users/user/';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  uploadFile: any = (data, token: any) => {
    const url = this.baseUrl + 'media/';
    const body = data;
    const options = this.headerBuilder('auto-generated', token);
    return this.http.post(url, body, options);
  }
}
