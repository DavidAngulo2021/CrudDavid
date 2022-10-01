import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefectuosoComponent } from './defectuoso/defectuoso.component';
import { ShowDefectuosoComponent } from './defectuoso/show-defectuoso/show-defectuoso.component';
import { AddEditDefectuosoComponent } from './defectuoso/add-edit-defectuoso/add-edit-defectuoso.component';
import {DefectuosoApiService} from './defectuoso-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DefectuosoComponent,
    ShowDefectuosoComponent,
    AddEditDefectuosoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DefectuosoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
