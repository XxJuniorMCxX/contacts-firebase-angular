import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


const materialModules = [MatCardModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,materialModules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title="hoa Mundo"
}
