import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adminData: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getAdminData().subscribe(
      data => {
          this.adminData = data;
      },
      (err) => {
        console.log (err);
      }
    );
  }

}
