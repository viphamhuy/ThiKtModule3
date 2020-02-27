import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss']
})
export class AddbooksComponent implements OnInit {


  addBookList: any[];
  message = '';
  isShow = false;
  isSuccess = true;
  formGroup = new FormGroup({
    name: new FormControl(),
    read: new FormControl()
  })
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  save() {
    const name = this.formGroup.get('name').value;
    const read = this.formGroup.get('read').value;
    this.bookService.addBooks(name, read).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.formGroup.reset();
    });
  }

}
