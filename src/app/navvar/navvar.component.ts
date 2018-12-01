import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navvar',
  templateUrl: './navvar.component.html',
  styleUrls: ['./navvar.component.scss']
})
export class NavvarComponent implements OnInit {
  @Input() public selectedId: number;

  constructor() { }

  ngOnInit() {
  }

}
