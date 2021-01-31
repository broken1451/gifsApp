import { Component } from '@angular/core';
import { Gif } from './gifs/interfaces/gif.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public gif: Gif[] = [];
  constructor() {}

  recibeGif(gif: Gif[]): void {
    this.gif = gif;
  }
}
