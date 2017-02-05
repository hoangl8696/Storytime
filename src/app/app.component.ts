import { LocalStorageModule } from 'angular-2-local-storage';

import { ApiHelperService } from './services/api-helper.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'API-helper service';
  private user: any;
  private token: any;

  constructor(private apiHelperService: ApiHelperService, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.apiHelperService.login({
      username: 'joonuska',
      password: 'RagnaxJIN7113'
    }
    ).subscribe(
      resp => {
        const json = resp.json();
        console.log(json.user);
        this.user = json.user;
        this.localStorageService.set('token', json.token);
        console.log(json.token);
      }
    );
  }

  test() {
    console.log('On the test function:');
    /*this.apiHelperService.getMedia().subscribe(
      resp => console.log(resp.json())
    );*/
    /*this.apiHelperService.getUserMedia(this.localStorageService.get('token')).subscribe(
      (resp) => console.log(resp.json()),
      (err) => console.log(err.json())
    );*/
    this.apiHelperService.requestAllAndCount()
    .subscribe(
      (resp) => console.log(resp.json()),
      (err) => console.log(err.json())
    );
  }

}
