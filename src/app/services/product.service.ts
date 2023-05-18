import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductI } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url = "http://localhost:3000/productList"

  constructor(private _http: HttpClient) { }

  
  create(record: ProductI){
    return this._http.post<ProductI>(this.url, record);
  }

  update(record: ProductI, id: number){
    return this._http.put<ProductI>(`${this.url}/${id}`, record);
  }

  findAll(){
    return this._http.get<ProductI[]>(this.url);
  }

  delete(id: number){
    return this._http.delete<ProductI[]>(`${this.url}/${id}`);
  }


}
