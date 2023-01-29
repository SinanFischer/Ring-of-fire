export class Game {
    public players: string[] = ['lilly', 'Sinan', 'BASTI'];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        this.createShuffeldStack();
    }

    createShuffeldStack() {
        this.addNumberCards(); 
        this.addSpecialCards(); 
        this.shuffle(this.stack); 
    }


    addNumberCards() {
        for (let i = 2; i < 10; i++) {
            this.stack.push(i + '_of_clubs.svg');
            this.stack.push(i + '_of_diamonds.svg');
            this.stack.push(i + '_of_hearts.svg');
            this.stack.push(i + '_of_spades.svg');
        }
    }


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

    