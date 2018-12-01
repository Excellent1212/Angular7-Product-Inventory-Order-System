import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonApiModule } from 'angular-jsonapi';
import { HttpClientModule, HttpErrorResponse, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbModule]
})
export class OrderComponent implements OnInit {
  orderProducts: string [];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private httpService: HttpClient) {
  config.backdrop = 'static';
  }
  elements: any = [
    {id: 1, UserFirstName: 'David', UserLastName: 'Ramsaran', ProductName: 'Screen',
    ProductSku: 'Auto', Quantity: 2, Total: '100$'},
    {id: 2, UserFirstName: 'Dariel', UserLastName: 'Frometa', ProductName: 'Battery',
    ProductSku: 'Auto', Quantity: 3, Total: '60$'},
  ];
  headElements = ['No', 'UserFirstName', 'UserLastName', 'ProductName', 'ProductSku', 'Quantity', 'Total', ' ', ' ', ' ', ' ', ' '];
  headModalElements = ['No', 'UserFirstName', 'UserLastName', 'ProductName', 'ProductSku', 'Quantity', 'Total'];
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  ngOnInit() {
    this.httpService.get('../assets/orders.json').subscribe(
      data => {
        this.orderProducts = data as string [];
        // this.orderProducts.map(product => {
        //     console.log(product);
        //   });
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
