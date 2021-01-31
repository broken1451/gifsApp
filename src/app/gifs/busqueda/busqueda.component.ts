import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  // Non-null assertion operator - operador para  asegurarse que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  @Output() enviaGif: EventEmitter<Gif[]> = new EventEmitter<Gif[]>();

  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}

  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifService.buscarGifs(valor)
    .subscribe((data: any) => {
      this.enviaGif.emit(data);
    });
    this.txtBuscar.nativeElement.value = '';
  }
}
