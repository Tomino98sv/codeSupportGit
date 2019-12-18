import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Auth } from 'src/entities/auth';
import { Login } from './../../shared/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: true;
  auth= new Auth();
  constructor(private store: Store) { }

  ngOnInit() {
  }

  formSubmit() {
    this.store.dispatch(new Login(this.auth));
    console.log(this.auth.name+"  "+this.auth.password);
  }

}
