import { LocalStorageService } from 'angular-2-local-storage';
import { ApiHelperService } from './../services/api-helper.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-search',
  templateUrl: './test-search.component.html',
  styleUrls: ['./test-search.component.scss']
})
export class TestSearchComponent implements OnInit {

  public searchForm = this.formBuilder.group({
    title: [''],
    description: ['']
  });

  public uploadForm = this.formBuilder.group({
    file: [''],
    title: [''],
    description: ['']
  });

  constructor(private apiHelperService: ApiHelperService, public formBuilder: FormBuilder,
  private localStorageService: LocalStorageService) { }

  search = (event, value) => {
    this.apiHelperService.updateFile(value, 48, this.localStorageService.get('token')).subscribe(
      (res) => { console.log(res.json()); },
      (err) => { console.log(err.json()); }
    );
  }

  upload = (event, value) => {
    console.log(event);
    console.log(value);
    const form: FormData = new FormData();
    const fileElement = event.target.querySelector('input[type=file]');
    const file = fileElement.files[0];
    form.append('file', file);
    form.append('title', value.title);
    form.append('description', value.description);
    this.apiHelperService.uploadFile(form, this.localStorageService.get('token')).subscribe(
      (res) => { console.log(res.json()); },
      (err) => { console.log(err.json()); }
    );
  }

  ngOnInit() {
  }

}
