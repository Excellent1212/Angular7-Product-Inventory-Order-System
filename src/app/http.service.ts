import { HttpErrorResponse, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private httpService: HttpClient) {}

  getInventories() {
    return this.httpService.get('https://buddyappserver-0-0-1.herokuapp.com/api/business-admins/products/5bde68cba70520024b95ed02');
  }

  getAdminData() {
    return this.httpService.get('https://buddyappserver-0-0-1.herokuapp.com/api/business-admins/business/info/5a6f40ec030bd01b87fe8d00');
  }

  getOrders() {
    return this.httpService.get('https://buddyappserver-0-0-1.herokuapp.com/api/business-admins/past/orders/5a6f40ec030bd01b87fe8d00');
  }
}
