import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      console.log('Login berhasil');
    }, error => {
      console.log('Login gagal');
    }
  );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;  // jika token ada return true
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
