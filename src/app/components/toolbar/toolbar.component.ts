import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialModules = [MatIconModule, MatButtonModule, MatToolbarModule];

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModules],
  template: `
    <mat-toolbar class="primary-color">
      <a mat-button>
        <mat-icon>home</mat-icon>
        <span>Home</span>
      </a>
      <a mat-button>
        <mat-icon>format_list_bulleted</mat-icon>
        <span>Contactos</span>
      </a>
      <span class="spacer"></span>
      <a mat-button (click)="emitClick()">
        <mat-icon color="primary">add_box</mat-icon>
        <span>Nuevo</span>
      </a>
    </mat-toolbar>
  `,
  styles: ``,
})
export class ToolbarComponent {
  emitClick() {
    console.log('click');
  }
}
