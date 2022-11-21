import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  valueSelected: any;

  constructor(router: Router) { }

  ngOnInit() {
    this.valueSelected = 'todos';
  }

  segmentChanged(ev: any) {

    if (ev.detail.value === 'todos') {
      this.valueSelected = 'todos';
    } if (ev.detail.value === 'preparatoria') {
      this.valueSelected = 'preparatoria';
    } if (ev.detail.value === 'compensatoria') {
      this.valueSelected = 'compensatoria';
    } if (ev.detail.value === 'relaxamento'){
      this.valueSelected = 'relaxamento';
    }

  }

}
