import { HttpErrorResponse, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private httpService: HttpClient) {}

  getInventories() {
    return this.httpService.get('../assets/inventories.json');
  }

  getAdminData() {
    return this.httpService.get('../assets/adminData.json');
  }

  getOrders() {
    return this.httpService.get('../assets/orders.json');
  }
}
