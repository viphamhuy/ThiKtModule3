import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {

  listBook: any[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getList().subscribe( result => {
      this.listBook = result;
    });
  }

  update(book: any) {
    console.log(book);
    this.bookService.update(book.id, book.name, 'false').subscribe(
      success => {
        alert('Đã đọc thành công');
        this.ngOnInit();
      },
      error => {
        alert('Đã đọc thất bại');
      }
    );
  }
}
