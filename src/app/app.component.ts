import { Component } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: Array<any>; 
  
  constructor(private firebaseService: FirebaseService) {}
  
  addUserButton() {
    //demander au service de faire l'ajout dans firebase
    this.firebaseService.createUser("pika", "pikachu", "11");
  }

  ngOnInit() {
    this.firebaseService.getUsers().subscribe(
      result => {
        this.users = result;
      }
    );
    console.log(this.users);

  }
}
