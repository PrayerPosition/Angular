import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule], // აუცილებელია ReactiveFormsModule-ის დამატება
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]]
    });
  }

  onSubmit() {
    console.log(this.signInForm.value);
  }
}
