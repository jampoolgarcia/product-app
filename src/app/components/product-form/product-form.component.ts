// core
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// material
import { MatDialogRef } from '@angular/material/dialog';

// core app
import { ProductI } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public freshnessList = ["Brand New", "Second Hand", "Refurbished"];
  public form!: FormGroup;


  constructor(private fb: FormBuilder, private _service: ProductService, private _dialogRef: MatDialogRef<ProductFormComponent>) { }

  buildingForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required] 
    })
  }

  addProduct(product: ProductI){
    this._service.create(product).subscribe(
      res => {
        alert("Product added successfully.");
        this.form.reset();
        this._dialogRef.close("save");
      },
      err =>{
        alert("Error while adding the product.");
      }
    );
  }

  ngOnInit(): void {
    this.buildingForm();
  }

}
