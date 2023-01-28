import { Component, Input, OnInit, OnChanges, } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent  implements OnInit, OnChanges {

  cardAction = [
    { title: 'What would you rather do?', description: 'i think you know the rules' },
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you nnever did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title = 'Be ready';
  description = 'Click on card to start the game';
  @Input() card: string; // contains current card path e.g '3_of_clubs.svg'


  constructor() { }

  ngOnInit(): void {

  }


  ngOnChanges(): void {
    console.log('currentOnChange card is: ' ,this.card); 
    let cardNumber = this.card.split('_')[0];
    if (this.isString(cardNumber)) {
      console.log('Es wurde ein special gezogen'); 
    }
    else {
      this.title = this.cardAction[cardNumber].title; 
      this.description = this.cardAction[cardNumber].description; 

    }
  }

  // check if variable is string
   isString(x:string) {
    return Object.prototype.toString.call(x) === "[object String]"
  }


}
