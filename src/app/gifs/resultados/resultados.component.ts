import { Component} from '@angular/core';
import { GifsService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {


get resultado() {
  return this.gifservice.resultados;
}

  constructor(private gifservice:GifsService) { }

}
