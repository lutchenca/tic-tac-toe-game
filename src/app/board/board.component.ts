import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
// our smart component has internal state, so they can change
export class BoardComponent implements OnInit {
  // squares represent the nine moves on tic-tac-toe game which will be an array of strings
  squares!: any[];
  // xIsNext determines the current player 
  xIsNext!: boolean;
  winner!: string;

  constructor() { }

  //initial setup with work that has to be done
  ngOnInit(): void {
    //method which responsability its setup the initial values when starting a new game
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  //this method will serve as and event handler for when the user clicks on one of the buttons
  makeMove(idx: number) {
    //when the click happens we'll check the index in the array that they clicked on
    if (!this.squares[idx]) {
    // if the square has already been selected we won't do it anything
    //but if its empty or null we'll splice in the index of the square that user clicked 
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  //this is basically an algorith to determine if the user won on not copied of react tutorial 
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
