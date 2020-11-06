import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserLoginServiceService } from '../Services/user-login-service.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  loggedInUserName = "";
  subscription: Subscription;

  constructor(private loginService: UserLoginServiceService) { 
    this.subscription = this.loginService.onLogin().subscribe(user => {
      if (user) {
          this.loggedInUserName = user.name
      } else {
          this.loggedInUserName = "No User";
      }
    });
  }

  ngOnInit(): void {
    this.loginService.loginUser("Michael Pogson");

  }

}
