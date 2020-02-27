import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'http://localhost:8081/books';
  constructor(private httpClient: HttpClient) { }
  public getList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
  public addBooks(name: string, read: boolean): Observable<any> {
    const book = {
      name,
      read
    };
    return this.httpClient.post(this.apiUrl, book);
  }
  update(id: number, name: string, read: string): Observable<any> {
    const book = {
      id,
      name,
      read
    };
    return this.httpClient.put<any>(this.apiUrl, book);
  }
}
