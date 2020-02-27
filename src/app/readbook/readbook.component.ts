import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-readbook',
  templateUrl: './readbook.component.html',
  styleUrls: ['./readbook.component.scss']
})
export class ReadbookComponent implements OnInit {

  readBookList: any[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getList().subscribe( result => {
      this.readBookList = result;
    });
  }
  update(book: any) {
    console.log(book);
    this.bookService.update(book.id, book.name, 'true').subscribe(
      success => {
        alert('Đọc lại thành công');
        this.ngOnInit();
      },
      error => {
        alert('Đọc lại thất bại');
      }
    );
  }

}
