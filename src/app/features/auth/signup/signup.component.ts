import { Component, inject, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ApiResponse } from '../../../models/ApiResponse';
import { User } from '../../../models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {}
  authService = inject(AuthService);
  fb = inject(FormBuilder);

  userRoles = [
    { id: 1, name: 'ADMIN' },
    { id: 2, name: 'USER' },
  ];

  // userForm: FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   mobNo: new FormControl(''),
  //   password: new FormControl(''),
  //   cpassword: new FormControl(''),
  //   roles: new FormArray([]),
  // });

  userForm = this.fb.group(
    {
      id: [null],
      firstName: ['', [Validators.required, Validators.minLength(10)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cpassword: ['', [Validators.required]],
      roles: this.fb.array([], Validators.required),
    },
    {
      validators: [
        this.passwordMatchValidator.bind(this),
        // this.validateAtLeastOneRoleSelected.bind(this),
      ],
    }
  );

  passwordMatchValidator(form: FormGroup) {
    const pwd = form.get('password')?.value;
    const cpwd = form.get('cpassword')?.value;
    if (pwd === cpwd) return null;
    else return { passwordMismatch: true };
  }

  // validateAtLeastOneRoleSelected(
  //   control: AbstractControl
  // ): ValidationErrors | null {
  //   const formArray = control as FormArray;
  //   return formArray && formArray.length > 0 ? null : { noRoleSelected: true };
  // }

  validateAtLeastOneRoleSelected(group: FormGroup): ValidationErrors | null {
    const rolesArray = group.get('roles') as FormArray;
    return rolesArray && rolesArray.length > 0
      ? null
      : { noRoleSelected: true };
  }

  onRoleChange(role: any, event: any) {
    const rolesArray = this.userForm.get('roles') as FormArray;
    if (event.target.checked) {
      rolesArray.push(new FormControl(role));
    } else {
      const index = rolesArray.controls.findIndex(
        (x) => x.value.id === role.id
      );
      rolesArray.removeAt(index);
    }

    // this.userForm.updateValueAndValidity();
    // rolesArray.markAsTouched();
  }

  register() {
    // if (this.userForm.invalid) {
    //   this.userForm.markAllAsTouched();
    //   return;
    // }

    // const formValue = this.userForm.value;
    const formValue = this.userForm.value as User;
    this.authService.register(formValue).subscribe({
      next: (res: ApiResponse) => {
        console.log(res);
        alert(res.message);
        this.userForm.reset();
      },
      error: (error) => console.log(error),
    });
  }
}
