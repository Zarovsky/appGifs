import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {

  private _historial: string[] = [];
  // apy-key de GIPHY
  private apikey:string = 'jgkYFTAUonqoG43NUBRFE4pbzOyXMwkb';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 10;

 public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor (private http: HttpClient) {

    if (localStorage.getItem('historial'))
    {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();
    // evitamos duplicados
    if (!this._historial.includes(query)) {
      this._historial.unshift(query); // para añadirlo el primero
      // recortamos en solo 10
      this._historial = this._historial.splice(0, 9);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    // creamos los parámetros para la URL
    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('q', query)
    .set('limit', this.limit.toString());

    console.log(params.toString());

    // llamamos servicio GIPHY
    this.http.get(`${ this.servicioUrl }/search`, { params: params })
    .subscribe( (resp:any) => {
      this.resultados = resp.data; // esto lo acepta porque no sabe que viene

     localStorage.setItem('resultado', JSON.stringify(this.resultados));
    });


  }





}
