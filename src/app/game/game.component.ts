import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  pickCardAnimation = false;
  newCard:string = ''; 
   game: Game; 

  constructor() {
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
    let newCard = this.game.stack.pop(); 
    console.log(newCard); 
    this.game.playedCards.push(newCard); 
    this.pickCardAnimation = true;
  }





}
