import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user.model';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeNow: string
  userLogged: UserModel

  constructor(
    private loginService: LoginService,
    private userService: UserService,

    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    const uid = localStorage.getItem('uid')
    this.userService.find(uid).then((usr) => {
      this.userLogged = usr as UserModel;
    })
  }

  logout() {
    this.loginService.logout().then(() => {
      this.router.navigate(['../']);
    })
  }

  verifyNotShow() {
    this.routeNow = this.router.routerState.snapshot.url;
    if (this.router.routerState.snapshot.url === '' || this.router.routerState.snapshot.url === '/') {
      return false;
    } else {
      return true;
    }
  }
}
