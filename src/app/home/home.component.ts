import { Component, OnInit } from '@angular/core';
import { JsonApiModule } from 'angular-jsonapi';
import { HttpClientModule, HttpErrorResponse, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adminData: string [];
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('../assets/store.admin.json').subscribe(
      data => {
        this.adminData = data as string [];
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
