// core
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// material
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
  public action = "save";

  constructor(private fb: FormBuilder, 
    private _service: ProductService, 
    @Inject(MAT_DIALOG_DATA) public editData: ProductI,
    private _dialogRef: MatDialogRef<ProductFormComponent>) { }

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
    if(!this.editData){
      this.create(product);
    }else{
      this.update(product);
    }
  }

  private create(product: ProductI){
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

  private update(product: ProductI){
    this._service.update(product, this.editData.id!).subscribe(
      res => {
        alert("Product updated successfully.");
        this.form.reset();
        this._dialogRef.close("update");
      },
      err =>{
        alert("Error while updating the product.");
      }
    );
  }

  ngOnInit(): void {
    this.buildingForm();

    if(this.editData) {
      this.action = 'update';
      this.form.patchValue(this.editData);
    }
  }

}
