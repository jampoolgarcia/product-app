import { Component, OnInit } from '@angular/core';

// material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { MatDialog } from '@angular/material/dialog';
import { ProductFormComponent } from 'src/app/components/product-form/product-form.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [ MatToolbarModule, MatIconModule, MatButtonModule ]
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

}
