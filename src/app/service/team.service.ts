import { Firestore, addDoc, collection, collectionData, doc, deleteDoc, updateDoc, getDoc } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private firestore: Firestore
  ) { }

  create(player: TeamModel) {
    const uid = localStorage.getItem('uid')
    const asssetsRef = collection(this.firestore, 'team')
    return addDoc(asssetsRef, { ...player, uid: uid } as TeamModel)
  }

  list() {
    const playersRef = collection(this.firestore, 'team')
    return collectionData(playersRef, { idField: 'id' }) as Observable<TeamModel[]>
  }

  async find(id: string) {
    const assetsCategoryRef = collection(this.firestore, 'team');
    return getDoc(doc(assetsCategoryRef, id))
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          return data;
        } else {
          return null;
        }
      })
  }

  update(player: TeamModel) {
    const uid = localStorage.getItem('uid')
    const playerDocRef = doc(this.firestore, `team/${player.id}`)
    return updateDoc(playerDocRef, { ...player, uid: uid } as {})
  }

  delete(playerId: string) {
    const playerDocRef = doc(this.firestore, `team/${playerId}`)
    return deleteDoc(playerDocRef);
  }

}
