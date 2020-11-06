import { Component, OnInit, Input } from '@angular/core';
import { UserLoginServiceService } from '../Services/user-login-service.service';

@Component({
  selector: 'app-relogin',
  templateUrl: './relogin.component.html',
  styleUrls: ['./relogin.component.scss']
})
export class ReloginComponent implements OnInit {

  constructor(private loginService: UserLoginServiceService) { 

  }

  userName : string;

  onSubmit(){
    this.loginService.loginUser(this.userName);
  }

  ngOnInit(): void {
  }

}
