import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Auth } from 'src/entities/auth';
import { Login } from './../../shared/auth.action';
import { Router } from '@angular/router';
import { AuthState } from 'src/shared/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: true;
  auth= new Auth();
  constructor(private store: Store,private router: Router) { }

  ngOnInit() {
  }

  formSubmit() {
    this.store.dispatch(new Login(this.auth)).subscribe(() => {
      if (this.store.selectSnapshot(AuthState.username)) {
        this.router.navigateByUrl(
          this.store.selectSnapshot(AuthState.redirectUrl)
          );
      }
    });
    console.log(this.auth.username + ' ' + this.auth.password);
  }

}
