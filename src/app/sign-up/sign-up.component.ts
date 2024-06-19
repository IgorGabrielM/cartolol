import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userLogin: UserModel

  constructor(
    private loginService: LoginService,

    private router: Router
  ) { }

  ngOnInit(): void {
    this.userLogin = new UserModel()
  }

  async onSubmit() {
    const user = await this.loginService.login(this.userLogin)

    this.loginService.registerUser(this.userLogin).then((res) => {
      this.router.navigate(['../'])
    })
    /*       this.snackBar.open("Autenticado com sucesso.", "Fechar", {
            duration: 3000,
            horizontalPosition: "end"
          }); */
  }
}
