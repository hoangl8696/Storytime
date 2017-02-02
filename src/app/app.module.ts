import { ApiHelperService } from './services/api-helper.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
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
