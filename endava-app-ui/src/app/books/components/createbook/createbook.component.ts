import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Book } from 'src/models/book';

@Component({
  selector: 'createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css'],
})
export class CreateBookComponent {

  createBookForm: FormGroup;

  constructor(private httpClient: HttpClient, private router: Router){

  }

  ngOnInit() {
    this.createBookForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2)
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      salePrice: new FormControl(null, [
        Validators.required,
      ]),
      rentPrice: new FormControl(null, [
        Validators.required,
      ])
    });
  }
  onSubmit() {

    const rawValue = this.createBookForm.getRawValue();
    const body = new Book();
    body.author = rawValue.author;
    body.title = rawValue.title;
    body.saleprice = +rawValue.salePrice;
    body.rentprice = +rawValue.rentPrice;

    this.httpClient.post('https://localhost:44337/book', body)
    .subscribe(() => this.router.navigate(['/list-books']));
  }

  get title(){
    return this.createBookForm.get('title');
  }
  get author(){
    return this.createBookForm.get('author');
  }
  get salePrice(){
    return this.createBookForm.get('salePrice');
  }
  get rentPrice(){
    return this.createBookForm.get('rentPrice');
  }

}
