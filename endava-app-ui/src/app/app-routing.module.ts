import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateBookComponent } from "./books/components/createbook/createbook.component";
import { ListBooksComponent } from "./books/components/list-books/list-books.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'createbook', component: CreateBookComponent},
    { path: 'list-books', component: ListBooksComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent, LoginComponent, RegisterComponent, CreateBookComponent, ListBooksComponent]
