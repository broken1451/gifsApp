import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  get resultados(): Gif[] {
    return this.gifService.gifs;
  }

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
    // console.log('aca', this.resultados);
  }

}
