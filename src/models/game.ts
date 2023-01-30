export class Game {
    public players: string[] = ['lilly', 'Sinan', 'BASTI'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;


    playerPickedCards: any = [
        {
          id: 1,
          cardsPicked: ['card1', 'card2',]
        },
        {
          id: 2,
          cardsPicked: ['card1', 'card2',]
        },
        {
          id: 3,
          cardsPicked: ['card1', 'card2',]
        },
        {
          id: 4,
          cardsPicked: ['card1', 'card2',]
        },
    ]


    constructor() {
        this.createShuffeldStack();
    }
    

    createShuffeldStack() {
        this.addNumberCards(); 
        this.addSpecialCards(); 
        this.shuffle(this.stack); 
    }


    // adds all cards to stack from 2 to 10
    addNumberCards() {
        for (let i = 2; i < 10; i++) {
            this.stack.push(i + '_of_clubs.svg');
            this.stack.push(i + '_of_diamonds.svg');
            this.stack.push(i + '_of_hearts.svg');
            this.stack.push(i + '_of_spades.svg');
        }
    }


        // adds all cards like: queen king ace jack 
    addSpecialCards() {
        for (let i = 0; i < 4; i++) {

            let type: string = "";

            if (i === 0) { type = 'ace'; }
            if (i === 1) { type = 'jack'; }
            if (i === 2) { type = 'queen'; }
            if (i === 3) { type = 'king'; }

            this.stack.push(type + '_of_clubs.svg');
            this.stack.push(type + '_of_diamonds.svg');
            this.stack.push(type + '_of_hearts.svg');
            this.stack.push(type + '_of_spades.svg');
        }
    }


    // shuffels the card deck
     shuffle(array:string[]) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      
    }

    