import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get historial(): any[] {
    return this.gifService.historial;
  }

  public gifs: Gif[] = [];
  @Output() enviaGif: EventEmitter<Gif[]> = new EventEmitter<Gif[]>();

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
    if ( localStorage.getItem('resultados') ) {
      // tslint:disable-next-line: no-non-null-assertion
      this.gifs = JSON.parse(localStorage.getItem('resultados')!);
    }
  }


  buscar(termino: string): void{
    this.gifService.buscarGifs(termino).subscribe((data: any) => {
        this.gifs = data;
        this.enviaGif.emit(this.gifs);
        localStorage.setItem('resultados', JSON.stringify(this.gifs));
    });
  }
}
