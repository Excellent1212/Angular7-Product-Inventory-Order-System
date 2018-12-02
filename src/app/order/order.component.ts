import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [NgbModalConfig, NgbModal, NgbModule]
})
export class OrderComponent implements OnInit {
  orderProducts: any;
  orderFields = ['UserFirstName', 'UserLastName', 'ProductName', 'ProductSku', 'Quantity', 'Total'];
  orderFields2 = ['UserFirstName', 'UserLastName', 'ProductName', 'ProductSku', 'Quantity', 'Total'];
  orderFields3 = ['No', 'ProductId', 'ProductName', 'Quantity', 'Price'];

  constructor(config: NgbModalConfig, private modalService: NgbModal, private http: HttpService) {
    config.backdrop = 'static';
  }

  ngOnInit() {
    this.http.getOrders().subscribe(
      data => {
          this.orderProducts = data;
      },
      (err) => {
        console.log (err);
      }
    );
  }

  showOrder(content, id) {
    this.modalService.open(content, { size: 'lg' });
  }
}
