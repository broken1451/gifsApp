import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  get historial(): string[] {
    return this.gifService.historial;
  }

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }


  buscar(termino: string): void{
    console.log({termino})
    this.gifService.buscarGifs(termino);
  }
}
