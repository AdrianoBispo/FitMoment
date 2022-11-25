import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  valueSelected: any;

  public data = ['Exercício Preparatório', 'Exercício Compensatório', 'Exercício de Relaxamento'];

  public results = [...this.data];

  constructor() {}

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

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

}
