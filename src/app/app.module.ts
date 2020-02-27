import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { ListbookComponent } from './listbook/listbook.component';
import {HttpClientModule} from '@angular/common/http';
import { ReadbookComponent } from './readbook/readbook.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SinglepageComponent,
    ListbookComponent,
    ReadbookComponent,
    AddbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
