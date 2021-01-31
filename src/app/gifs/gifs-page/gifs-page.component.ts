import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.scss']
})
export class GifsPageComponent implements OnInit {

  @Input() gif: Gif[] = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  recibeGif(gif: Gif[]): void{
    this.gif = gif;
    localStorage.setItem('resultados', JSON.stringify(this.gif));
  }

}
