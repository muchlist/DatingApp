import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login berhasil');
    }, error => {
      this.alertify.error(error);
    }
  );
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    return this.authService.loggedIn();  // jika token ada return true
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logout');
  }

}
