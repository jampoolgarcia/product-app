// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL
  ], 
  exports: [
    MATERIAL
  ]
})
export class MaterialModule { }
