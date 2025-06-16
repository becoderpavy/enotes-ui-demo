import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    email: '',
    password: '',
  };

  http = inject(HttpClient);
  router = inject(Router);
  onLogin() {
    this.http
      .post('http://localhost:8080/api/v1/auth/login', this.loginObj)
      // .subscribe(
      //   (res: any) => {
      //     if (res.status == 'succes') {
      //       localStorage.setItem('token', JSON.stringify(res.data.token));
      //       this.router.navigateByUrl('dashboard');
      //     } else {
      //       alert(res.message);
      //     }
      //   },
      //   (error) => {
      //     alert(error);
      //   }
      // );
      .subscribe({
        next: (res: any) => {
          if (res.status == 'succes') {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            localStorage.setItem('userDtls', JSON.stringify(res.data.user));
            this.router.navigateByUrl('dashboard');
          }
        },
        error: (error) => {
          console.log(error);
          alert(error.error.message);
        },
      });
  }
}
