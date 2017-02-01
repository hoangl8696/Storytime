import { ApiHelperService } from './../services/api-helper.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public uploadForm = this.formBuilder.group({
    file: [''],
    title: [''],
    description: ['']
  });

  constructor(private apiHelper: ApiHelperService, public formBuilder: FormBuilder) { }


  ngOnInit() {
  }

  upload = (event) => {
    // how to use api-helper to upload file
    // let form = new FormData();
    // form.append('file', event.target.querySelector('input[type=file]').files[0])
    // form.append('title', this.uploadForm.controls['title']);
    // form.append('description', this.uploadForm.value.description);
    // this.apiHelper.uploadFile(form, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNDAsInVzZXJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsImZ1bGxfbmFtZSI6bnVsbCwiaXNfYWRtaW4iOm51bGwsInRpbWVfY3JlYXRlZCI6IjIwMTctMDEtMzFUMTE6MTA6MDMuMDAwWiIsImlhdCI6MTQ4NTk0ODczOCwiZXhwIjoxNDg2MDM1MTM4fQ.Bchxd7zPFPtOxIC1bFdJ2b9eobaxXkBI9hHkGH_0Juc').subscribe(
    //   (res) => {
    //     console.log(res.json());
    //   }
    //   , (err) => console.log(err.json())
    // );
  }
}
