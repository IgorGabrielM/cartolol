import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { UserModel } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(
    private auth: Auth,
  ) { }

  async registerUser(userModel: UserModel) {
    try {
      const user = await createUserWithEmailAndPassword(this.auth, userModel.email, userModel.password)
      return user
    } catch (e) {
      return null
    }
  }

  async login(userModel: UserModel) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, userModel.email, userModel.password)
      return user
    } catch (err) {
      return err
    }
  }


  logout() {
    return signOut(this.auth)
  }

}
