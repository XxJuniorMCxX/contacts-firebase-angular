import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormField,MatLabel } from '@angular/material/form-field';

const materialModules=[MatInputModule];
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [materialModules],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
