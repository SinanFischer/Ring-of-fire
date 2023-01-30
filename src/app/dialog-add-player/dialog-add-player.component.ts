import { Component } from '@angular/core';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {

  game: Game; 
  name:string = ''; 


   playerGenderIs = ''; 

   constructor() {
    this.game = new Game(); 

   }




  
 
}
