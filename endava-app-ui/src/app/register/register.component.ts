import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/models/user';

@Component({
    templateUrl: './register.component.html',
    selector: 'register',
    styleUrls: ['./register.component.css'],
})



export class RegisterComponent {
    registerForm: FormGroup;

    constructor(private httpClient: HttpClient, private router: Router) {

    }

    ngOnInit() {
        this.registerForm = new FormGroup({
            name: new FormControl(null, [
                Validators.required,
                Validators.pattern("/^[a-zA-Z]+([ a-zA-Z]*) *$/")
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/")

            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.pattern("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/")

            ]),
            repass: new FormControl(null, [
                Validators.required,
            ]),
            phone: new FormControl(null, [
                Validators.required,
                Validators.pattern("/^([+]{1}[3][7][3][0-9]{8})+$|^([0]{1}[0-9]{8})+$|^(([6]{1}|[7]{1})[0-9]{7})+$/")

            ])
        });
    }

    onSubmit() {
        const rawValue = this.registerForm.getRawValue();
        const body = new User();
        body.name = rawValue.name;
        body.email = rawValue.email;
        body.password = rawValue.password;
        body.phone = rawValue.phone;

        this.httpClient.post('https://localhost:44337/user/register', body)
            .subscribe(() => this.router.navigate(['/home']));
    }

    get name() {
        return this.registerForm.get('name');
    }
    get email() {
        return this.registerForm.get('email');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get repass() {
        return this.registerForm.get('repass');
    }
    get phone() {
        return this.registerForm.get('phone');
    }

}
