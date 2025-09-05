import { Component, inject, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule,MatLabel } from '@angular/material/form-field';
import { MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';

import { FormBuilder,FormGroup,ReactiveFormsModule,Validator } from '@angular/forms';

const materialModules=[ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatDialogModule];
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [materialModules],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  
  contactForm!: FormGroup;//es una variable que va a tener un formulario de contacto
  private readonly _formBuilder=inject(FormBuilder);
  private readonly _matDialog=inject(MAT_DIALOG_DATA);
  private readonly _contactSvc=inject
  
  
  
  ngOnInit(): void {
      
  }

  getTitle():string{
    return this._matDialog.data?'Update Contact':'New Contact';
  }
}
