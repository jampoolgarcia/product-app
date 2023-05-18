// core
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// core app
import { ProductI } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit  {

  displayedColumns: string[] = ['name', 'category', 'date', 'freshness', 'price', 'comment', 'actions'];
  dataSource!: MatTableDataSource<ProductI>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private _service: ProductService, public dialog: MatDialog) {
  
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._service.findAll().subscribe(
      res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 
      err => {
        alert("Error while fetching the Records!!");
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
  add() {
    this.dialog.open(ProductFormComponent, {
      width: '30%'
    }).afterClosed().subscribe(res => {
      if(res==='save')
        this.getAllProducts();
    });
  }

  edit(row: ProductI){
    this.dialog.open(ProductFormComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(res => {
      if(res==='update')
        this.getAllProducts();
    });
  }

  delete(id: number){
    this._service.delete(id).subscribe(
      res => {
        alert("Product Delete Successfully.");
        this.getAllProducts();
      },
      err => {
        alert("Error while Deleting the product.");
      }
    )
  }
}



