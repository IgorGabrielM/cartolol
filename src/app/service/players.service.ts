import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, query, where, doc, deleteDoc, updateDoc, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PlayersModel } from '../model/players.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(
    private firestore: Firestore
  ) { }

  create(player: PlayersModel) {
    const uid = localStorage.getItem('uid')
    const asssetsRef = collection(this.firestore, 'players')
    return addDoc(asssetsRef, { ...player, uid: uid } as PlayersModel)
  }

  list() {
    const playersRef = collection(this.firestore, 'players')
    return collectionData(playersRef, { idField: 'id' }) as Observable<PlayersModel[]>
  }

  async find(id: string) {
    const assetsCategoryRef = collection(this.firestore, 'players');
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

  update(player: PlayersModel) {
    const uid = localStorage.getItem('uid')
    const playerDocRef = doc(this.firestore, `players/${player.id}`)
    return updateDoc(playerDocRef, { ...player, uid: uid } as {})
  }

  delete(playerId: string) {
    const playerDocRef = doc(this.firestore, `players/${playerId}`)
    return deleteDoc(playerDocRef);
  }

}
