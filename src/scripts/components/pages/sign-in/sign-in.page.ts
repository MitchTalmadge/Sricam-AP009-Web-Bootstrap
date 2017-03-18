import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'sign-in-page',
    templateUrl: 'sign-in.page.html',
    styleUrls: ['sign-in.page.css']
})
export class SignInPage implements OnInit {

    protected formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.formGroup = this.formBuilder.group({
            username: [null, Validators.compose([Validators.required])],
            password: null
        });

    }

    onSubmit() {

    }
}