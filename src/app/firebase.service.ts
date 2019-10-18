import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(public db: AngularFirestore) { }

  createUser(nom, prenom, age){
    return this.db.collection('users').add({
      nom: nom,
      prenom: prenom,
      age: age,
    });
  }

  getUsers(){
    return this.db.collection('users').snapshotChanges();
  }

}
