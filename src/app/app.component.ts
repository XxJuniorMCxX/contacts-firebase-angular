import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from '@components/toolbar/toolbar.component';

const materialModules = [MatCardModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,materialModules,ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title="Hello World"
}
