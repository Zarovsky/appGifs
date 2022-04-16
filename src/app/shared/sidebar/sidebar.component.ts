import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor(private gifsservicio: GifsService) { }

  get historial(): string[]
  {
    return this.gifsservicio.historial;
  }

  buscar(termino: string) {
return this.gifsservicio.buscarGifs(termino);
  }

}
