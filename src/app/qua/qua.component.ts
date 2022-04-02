import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../route-data.service';

@Component({
  selector: 'app-qua',
  templateUrl: './qua.component.html',
  styleUrls: ['./qua.component.scss']
})
export class QuaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
    });
  }

}
