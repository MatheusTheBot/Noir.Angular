import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  handleLogin() {
    let obj: Object = {
      username: this.username,
      password: this.password,
    };

    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(obj),
    }).then((data) => {
      console.log(data);
    });
  }
}
