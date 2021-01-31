import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  // get resultados(): Gif[] {
  //   return this.gifService.gifs;
  // }

  @Input() resultados: Gif[] = [];

  constructor(private gifService: GifsService) {}

  ngOnInit(): void {
    if ( localStorage.getItem('resultados') ) {
      // tslint:disable-next-line: no-non-null-assertion
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }
  }

}
