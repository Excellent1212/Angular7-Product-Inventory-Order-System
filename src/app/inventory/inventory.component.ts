import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonApiModule } from 'angular-jsonapi';
import { HttpClientModule, HttpErrorResponse, HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule , MatTable, Sort} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

// export interface Invendory {
//   productname: string;
//   sku: string;
//   vendor: string;
// }
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbModule]
})
export class InventoryComponent implements OnInit {
  sortedData: any[] = [];
  constructor(private zone: NgZone, config: NgbModalConfig, private modalService: NgbModal, private httpService: HttpClient) {

    this.sortedData = this.addInventoryProducts.slice();
  }
  private; newAttribute: any = {};
  addInventoryProducts: any [] = [];
  elements: any = [
    {id: 1, ProductName: 'Computer', SKU: 'Otto', Quantity: 1, Price: '150$'},
    {id: 2, ProductName: 'Network', SKU: 'Otto', Quantity: 3, Price: '200$'},
    {id: 3, ProductName: 'Laptop', SKU: 'Otto', Quantity: 4, Price: '300$'},
  ];
  headElements = ['No', 'ProductName', 'SKU', 'Quantity', 'Price', ' ', ' '];
  headElementAddInventorys = ['ProductName', 'SKU', 'Vendor', ' '];

  // inventorys: Invendory[] = [
  //   {productname: 'Frozen yogurt', sku: 'CCC', vendor: 'Many Man'},
  //   {productname: 'Ice cream sandwich', sku: 'CCC', vendor: 'Eclair'},
  //   {productname: 'Gingerbread', sku: 'CCC', vendor: 'Cupcake'},
  // ];


  sortData(sort: Sort) {
    console.log(this.addInventoryProducts);
    if (!this.addInventoryProducts) {
      return;
    }
    const data = this.addInventoryProducts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productname': return compare(a.productname, b.productname, isAsc);
        case 'sku': return compare(a.sku, b.sku, isAsc);
        case 'vendor': return compare(a.vendor, b.vendor, isAsc);
        default: return 0;
      }
    });
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
    const that = this;
    this.httpService.get('../assets/add.inventory.json').subscribe(
      data => {
        // this.zone.run(() => {
          this.addInventoryProducts = data as any[];
          // console.log(this.addInventoryProducts);
      // });
        //  console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }
  addInventory() {
    this.elements.push(this.newAttribute);
    // this.newAttribute = {};
  }
  deleteInventory(id) {
    for (let i = 0; i < this.elements.length; ++i) {
      if (this.elements[i].id === id) {
          this.elements.splice(i, 1);
      }
    }
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



