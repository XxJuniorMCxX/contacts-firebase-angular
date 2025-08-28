import { Component } from '@angular/core';
import {GridComponent} from '@components/grid/grid.component';

const MaterialModules=[GridComponent]
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MaterialModules],
  template: `
    <section>
      <h1>Listado de Contactos</h1>
      <app-grid></app-grid>
    </section>
  `,
  styles: ``
})
export class ListComponent {

}
