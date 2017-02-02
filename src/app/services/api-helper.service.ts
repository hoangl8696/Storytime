import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'rxjs/add/operator/map';
/* API helper service:
Designed to ease communication with the wbma-server-node.

 */
@Injectable()
export class ApiHelperService {

  private baseUrl: any = 'http://media.mw.metropolia.fi/wbma';
  private headers: Headers;
  private options: RequestOptions;
  private body: any;

  constructor(private http: Http) { }

  private headerBuilder: any = (contentType?, token?) => {
    this.headers = new Headers({});
    this.options = new RequestOptions({ headers: this.headers });
    if (contentType) {
      if (contentType !== 'auto-generated') { this.headers.append('Content-Type', contentType); } else { }
    } else {
      this.headers.append('Content-Type', 'application/json')
    }
    if (token) {
      this.headers.append('x-access-token', token);
    }
    return this.options;
  }

  /* OTHER */
  checkName: any = (username: any) => {
    const url = this.baseUrl + '/users/username/' + username;
    const options = this.headerBuilder();
    return this.http.get(url, options);
  }

  login: any = (data) => {
    const url = this.baseUrl + '/login/';
    const options = this.headerBuilder();
    const body = JSON.stringify(data);
    console.log(options);
    console.log(body);
    return this.http.post(url, body, options);
  }

  /* USER */
  signup: any = (data) => {
    const url = this.baseUrl + '/users/';
    const options = this.headerBuilder();
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(url, body, options);
  }

  modifyUser: any = (data, token: any) => {
    const url = this.baseUrl + '/users/';
    const options = this.headerBuilder('', token);
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.put(url, body, options);
  }

  getUser: any = (id: any, token: any) => {
    const url = this.baseUrl + '/users/' + id;
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getAllUsers: any = (token: any) => {
    const url = this.baseUrl + '/users/';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getCurrentUser: any = (token: any) => {
    const url = this.baseUrl + '/users/user/';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  /* MEDIA */
  getFile: any = (id: any) => {
    const url = this.baseUrl + '/media/' + id;
    const options = this.headerBuilder();
    console.log(options);
    return this.http.get(url, options);
  }

  deleteFile: any = (id: any, token: any) => {
    const url = this.baseUrl + '/media/' + id;
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.delete(url, options);
  }

  getUserMediaById: any = (id: any, token?) => {
    const url = this.baseUrl + '/media/user/' + id;
    let options;
    if (token) {
      options = this.headerBuilder('', token);
    } else {
      options = this.headerBuilder();
    }
    console.log(options);
    return this.http.get(url, options);
  }

  getUserMedia: any = (token: any) => {
    const url = this.baseUrl + '/media/user';
    const options = this.headerBuilder('', token);
    console.log(options);
    return this.http.get(url, options);
  }

  getMedia: any = (start?, limit?) => {
    const url = this.baseUrl + '/media';
    const options = this.headerBuilder();
    const params: URLSearchParams = new URLSearchParams;
    if (start) { params.set('start', start); }
    if (limit) { params.set('limit', limit); }
    options.search = params;
    console.log(options);
    return this.http.get(url, options);
  }

  search: any = (data: any, token: any) => {
    const url = this.baseUrl + '/media/search';
    const options = this.headerBuilder('', token);
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(url, body, options);
  }

  updateFile: any = (data: any, id: any, token: any) => {
    const url = this.baseUrl + '/media/' + id;
    const options = this.headerBuilder('', token);
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.put(url, body, options);
  }

  uploadFile: any = (data: any, token: any) => {
    const url = this.baseUrl + '/media';
    const body = data;
    const options = this.headerBuilder('auto-generated', token);
    return this.http.post(url, body, options);
  }

  /* COMMENT */
  deleteComment = (id: any, token: any) => {
    const url = this.baseUrl + '/comments/' + id;
    const options = this.headerBuilder('auto-generated', token);
    return this.http.delete(url, options);
  }

  // Still broken with preflight
  // postComment = (data, token: any) => {
  //   const url = this.baseUrl + '/comments';
  //   const body = JSON.stringify(data);
  //   const options = this.headerBuilder('', token);
  //   console.log(body);
  //   console.log(JSON.stringify(options));
  //   return this.http.post(url, body, options);
  // }

  getCommentsOfFile = (id: number) => {
    const url = this.baseUrl + '/comments/file/' + id;
    return this.http.get(url);
  }

  // Still broken with preflight
  // getCommentsOfUser = (token: any) => {
  //   const url = this.baseUrl + '/comments';
  //   const options = this.headerBuilder('', token);
  //   console.log(JSON.stringify(options));
  //   return this.http.get(url, options);
  // }

  /* RATING */

  // Still broken with preflight
  // rate = (data, token: any) => {
  //   const url = this.baseUrl + '/ratings';
  //   const body = JSON.stringify(data);
  //   const options = this.headerBuilder('', token);
  //   console.log(body);
  //   console.log(JSON.stringify(options));
  //   return this.http.post(url, body, options);
  // }

  deleteRating = (id: any, token: any) => {
    const url = this.baseUrl + '/ratings/file/' + id;
    const options = this.headerBuilder('', token);
    return this.http.delete(url, options);
  }

  getRatingOfFile = (id: any, token: any) => {
    const url = this.baseUrl + '/ratings/file/' + id;
    const options = this.headerBuilder('', token);
    return this.http.get(url, options);
  }

  // Still broken with preflight
  // getRatingOfUser = (token: any) => {
  //   const url = this.baseUrl + '/ratings';
  //   const options = this.headerBuilder('', token);
  //   return this.http.get(url, options);
  // }

  /* TAG */

  // Still broken with preflight
  // tag = (data, token: any) => {
  //   const url = this.baseUrl + '/tags';
  //   const body = JSON.stringify(data);
  //   const options = this.headerBuilder('', token);
  //   return this.http.post(url, body, options);
  // }

  getFilesByTag = (tag: any) => {
    const tagSafe = encodeURI(tag);
    const url = this.baseUrl + '/tags/' + tagSafe;
    return this.http.get(url);
  }

  getTagsByFile = (id: any) => {
    const url = this.baseUrl + '/tags/file/' + id;
    return this.http.get(url);
  }

  // Still broken with preflight
  // getTagsByUser = (token: any) => {
  //   const url = this.baseUrl + '/tags';
  //   const options = this.headerBuilder ('',token);
  //   return this.http.get(url,options);
  // }
}
