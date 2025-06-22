import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import { StorageService } from '../../../../core/services/storage.service';

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
  router = inject(Router);
  authService = inject(AuthService);
  storageService = inject(StorageService);

  onLogin() {
    this.authService.loginUser(this.loginObj).subscribe({
      next: (res: any) => {
        if (res.status == 'succes') {
          this.storageService.setItem('token', res.data.token);
          this.storageService.setItem('userDtls', res.data.user);
          alert('Login Succes');
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
