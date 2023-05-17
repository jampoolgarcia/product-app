import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductI } from 'src/app/model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public freshnessList = ["Brand New", "Second Hand", "Refurbished"];
  public form!: FormGroup;


  constructor(private fb: FormBuilder) { }

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
    console.log(product);
  }

  ngOnInit(): void {
    this.buildingForm();
  }

}
