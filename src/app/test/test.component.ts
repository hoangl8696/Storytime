import { ApiHelperService } from './../services/api-helper.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public signupForm = this.formBuilder.group({
    username: [''],
    password: [''],
    email: ['']
  });

  constructor(private apiHelper: ApiHelperService, public formBuilder: FormBuilder) { }


  ngOnInit() {
  }

  signup = (event) => {
    this.apiHelper.getCurrentUser( 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2OSwidXNlcm5hbWUiOiJ3ZWciLCJlbWFpbCI6IndlZ0BnbWFpbC5jb20iLCJmdWxsX25hbWUiOm51bGwsImlzX2FkbWluIjpudWxsLCJ0aW1lX2NyZWF0ZWQiOiIyMDE3LTAxLTMwVDEzOjE0OjU1LjAwMFoiLCJpYXQiOjE0ODU4OTIzMjgsImV4cCI6MTQ4NTk3ODcyOH0.VyXEk_HyC_aW19bZJYmJoEpxzuOQvx6jNLFf9LqLVTE').subscribe(
      (res) => {
            console.log(res.json());
          }
        , (err) => console.log(err.json())
    );
  }
}
