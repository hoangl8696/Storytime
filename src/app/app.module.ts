import { LocalStorageModule } from 'angular-2-local-storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestSearchComponent } from './test-search/test-search.component';
import { ApiHelperService } from './services/api-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    TestSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'storytime',
      storageType: 'localStorage'
    })
  ],
  providers: [ApiHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
