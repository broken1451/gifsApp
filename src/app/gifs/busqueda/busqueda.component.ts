import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit, AfterViewInit {
  // Non-null assertion operator - operador para  asegurarse que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  @Output() enviaGif: EventEmitter<Gif[]> = new EventEmitter<Gif[]>();
  public termino: string = '';

  constructor(private gifService: GifsService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifService.buscarGifs(valor)
    .subscribe((data: any) => {
      this.enviaGif.emit(data);
    });
    this.termino = '';
    this.txtBuscar.nativeElement.value = '';
  }
}
