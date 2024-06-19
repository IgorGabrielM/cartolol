import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
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

    this.loginService.login(this.userLogin).then((res) => {
      if (res.code == 'auth/invalid-credential' || res.code == 'auth/invalid-email') {
        /*         this.snackBar.open("Credenciais inválidas.", "Fechar", {
                  duration: 3000,
                  horizontalPosition: "end"
                }); */
      }
    })

    if (user) {
      localStorage.setItem('uid', user.user.uid)
      this.router.navigate(['home'])

      /*       this.snackBar.open("Autenticado com sucesso.", "Fechar", {
              duration: 3000,
              horizontalPosition: "end"
            }); */
    }
  }
}
