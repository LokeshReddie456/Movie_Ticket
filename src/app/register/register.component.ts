import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService) { }

  onSubmit(): void {
    if (this.isFormValid()) {
      const userData = {
        name: this.registerForm.firstname + ' ' + this.registerForm.lastname,
        email: this.registerForm.email,
        password: this.registerForm.password
      };

      this.apiService.registerUser(userData).subscribe(
        (response: any) => {
          console.log(response);
          alert('Registered successfully');
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }

  isFormValid(): boolean {
   
    if (!this.registerForm.firstname || !this.registerForm.lastname || !this.registerForm.email || !this.registerForm.password) {
      alert('Please fill out all fields.');
      return false;
    }

    return true;
  }
}
