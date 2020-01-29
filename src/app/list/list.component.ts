import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: any = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getBeer()
      .subscribe(
        res => {
          console.log(res);
          this.brews = res;
        },
        err => {
          console.log(err);
        }
      );
  }
}
