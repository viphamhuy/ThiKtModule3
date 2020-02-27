import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SinglepageComponent} from './singlepage/singlepage.component';
import {ListbookComponent} from './listbook/listbook.component';
import {ReadbookComponent} from './readbook/readbook.component';
import {AddbooksComponent} from './addbooks/addbooks.component';


const routes: Routes = [
  {
    path: '', component: SinglepageComponent
  },
  {
    path: 'book', component: ListbookComponent
  },
  {
    path: 'readbook', component: ReadbookComponent
  },
  {
    path: 'addbook', component: AddbooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
