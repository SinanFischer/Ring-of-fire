import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/models/game';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;

  newCard:string = ''; 
   game: Game; 
   lastCard:string = ''; 


  constructor(public dialog: MatDialog) {
    this.game = new Game(); 
    this.newGame(); 
  }


  ngOnInit(): void {
    this.newGame(); 
  }


  newGame() {
    console.log(this.game); 
  }


  // takes the first card from stack 
  takeCard() {
    if (!this.pickCardAnimation) {
    this.newCard = this.game.stack.pop(); 
    console.log('game is',this.newCard); 

    this.pickCardAnimation = true;

    this.game.playedCards.push(this.newCard); 


    setTimeout(() => {
      this.pickCardAnimation = false;
      this.lastCard = this.newCard; 
    }, 1500); 
    }

  }


  // opens Add player Menu and pushes new player
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
     this.game.players.push(name); 

      console.log('The dialog was closed', name);
    });
  }
}
