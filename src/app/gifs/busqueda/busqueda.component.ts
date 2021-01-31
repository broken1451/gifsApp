import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent implements OnInit {
  // Non-null assertion operator - operador para  asegurarse que el objeto no es nulo
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}

  buscar(): void {
    //  console.log('Hey', {txtBuscar});
    // console.log('Hey', this.txtBuscar);
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifService.buscarGifs(valor);
    // .subscribe((data: any) => {
    //   console.log({data});
    // });
    this.txtBuscar.nativeElement.value = '';
  }
}
