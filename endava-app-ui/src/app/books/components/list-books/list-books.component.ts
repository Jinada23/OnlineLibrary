import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../../../models/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent {
    
    books$:Observable<Book>;

    constructor(httpClient: HttpClient){
      this.books$ = httpClient.get<Book>('https://localhost:44337/book');
    }
}
