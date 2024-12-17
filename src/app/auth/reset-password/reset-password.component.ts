import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reset-password.component.html', // სწორად მიუთითეთ ბილიკი
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+380\d{9}$/)]]
    });
  }

  onSubmit() {
    console.log(this.resetForm.value);
  }
}
