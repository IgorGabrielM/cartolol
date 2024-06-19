import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc, updateDoc, getDoc, getFirestore, setDoc } from '@angular/fire/firestore';
import { UserModel } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: Firestore
  ) { }

  create(user: UserModel) {
    delete user.password

    const firestore = getFirestore();
    const userDocRef = doc(firestore, 'user_detail', user.id);
    return setDoc(userDocRef, { ...user } as UserModel);
  }

  list() {
    const userRef = collection(this.firestore, 'user_detail')
    return collectionData(userRef, { idField: 'id' })
  }

  async find(id: string) {
    const userRef = collection(this.firestore, 'user_detail');
    return getDoc(doc(userRef, id))
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          return data;
        } else {
          return null;
        }
      })
  }

  update(user: UserModel) {
    const userRef = doc(this.firestore, `user_detail/${user.id}`)
    return updateDoc(userRef, user as {});
  }

  delete(userId: string) {
    const userRef = doc(this.firestore, `user_detail/${userId}`)
    return deleteDoc(userRef);
  }

}
