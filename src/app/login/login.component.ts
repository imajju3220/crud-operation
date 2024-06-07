import { Component } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  success: boolean = false;
  danger: boolean = false;

  constructor(private student: UserServicesService, private router: Router) {}

  async onSubmit() {
    debugger;
    this.student
      .getStudentDetails(this.email, this.password)
      .subscribe((data) => {
        console.log(data);
        if (data) {
          this.success = true;
          this.danger = false;
          this.router.navigate(['dashboard']);
        } else {
          this.success = false;
          this.danger = true;
        }
      });
  }
}
