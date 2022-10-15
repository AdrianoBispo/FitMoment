import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.page.html',
  styleUrls: ['./aulas.page.scss'],
})
export class AulasPage implements OnInit {

  valueSelected: any;

  constructor() { }

  ngOnInit() {
    this.valueSelected = 'preparatoria';
  }

  segmentChanged(ev: any) {

    if (ev.detail.value === 'preparatoria') {
      this.valueSelected = 'preparatoria';
    } if (ev.detail.value === 'compensatoria') {
      this.valueSelected = 'compensatoria';
    } if (ev.detail.value === 'relaxamento') {
      this.valueSelected = 'relaxamento';
    }

  }
}
