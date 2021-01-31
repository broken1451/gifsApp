import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
import { Gif, SearchGifResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  public gifs: Gif[] = [];

  get historial(): string[] {
    return [...this._historial]; // romper la relacion-referencia
  }

  constructor(private httpClient: HttpClient) {
     if ( localStorage.getItem('historial') ) {
       // tslint:disable-next-line: no-non-null-assertion
       this._historial = JSON.parse(localStorage.getItem('historial')!);
       // tslint:disable-next-line: no-non-null-assertion
       this.gifs = JSON.parse(localStorage.getItem('resultados')!);
     }
  }

  buscarGifs(termino: string): any {
    if (termino.trim().length === 0) {
      return;
    }

    termino = termino.trim().toLocaleLowerCase();

    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // llamada al servicio
    const params = new HttpParams()
    .set('api_key', environment.apiKey)
    .set('q', termino)
    .set('limit', '10');

    // return this.httpClient.get<SearchGifResponse>(`${environment.url}?api_key=${environment.apiKey}&q=${termino}&limit=10`)
    return this.httpClient.get<SearchGifResponse>(`${environment.url}/search`, { params })
      .pipe(
        take(1),
        map((res: SearchGifResponse) => {
          return res.data;
        })).subscribe((data: any) => {
          this.gifs = data;
          localStorage.setItem('resultados', JSON.stringify(this.gifs));
        });
  }
}
