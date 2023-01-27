import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {

  constructor(private router: Router) {};  // private usage because we only use it in ts // public will be used when we need it in html too

  newGame() {
    // Start Game
    this.router.navigateByUrl('/game'); 
  }
}
