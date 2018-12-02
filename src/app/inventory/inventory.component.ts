import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from '../http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pipe } from 'rxjs';
import { FilterProductPipe } from '../filterproduct.pipe';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})

export class InventoryComponent implements OnInit {
  sortedData = [];
  newAttribute: any;
  inventories = [];
  currentInventories: any = [
    {id: 1, ProductName: 'Computer', SKU: 'Otto', Quantity: 1, Price: '150$'},
    {id: 2, ProductName: 'Network', SKU: 'Otto', Quantity: 3, Price: '200$'},
    {id: 3, ProductName: 'Laptop', SKU: 'Otto', Quantity: 4, Price: '300$'},
  ];
  inventoryFields = ['No', 'ProductName', 'SKU', 'Quantity', 'Price'];
  inventoryFields2 = ['ProductName', 'SKU', 'Vendor'];

  constructor(private modalService: NgbModal, private http: HttpService) {
  }

  ngOnInit() {
    this.http.getInventories().subscribe(
      data => {
          this.inventories = data as any[];
          this.sortedData = this.inventories.slice();
      },
      (err) => {
        console.log (err);
      }
    );
  }

  sortData(sort: Sort) {
    if (!this.inventories) {
      return;
    }
    const data = this.inventories.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'productname': return this._compare(a.productname, b.productname, isAsc);
        case 'sku': return this._compare(a.sku, b.sku, isAsc);
        case 'vendor': return this._compare(a.vendor, b.vendor, isAsc);
        default: return 0;
      }
    });
  }

  showInventory(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  deleteInventory(id) {
    const index = this.currentInventories.findIndex(inventory => inventory.id === id);
    if (index > -1) {
      this.currentInventories.splice(index, 1);
    }
  }

  _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}


