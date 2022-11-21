import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  valueSelected: any;

  constructor() { }

  ngOnInit() {
    this.valueSelected = 'mensagens';
  }

  segmentChanged(ev: any) {

    if (ev.detail.value === 'mensagens') {
      this.valueSelected = 'mensagens';
    } if (ev.detail.value === 'adicionar') {
      this.valueSelected = 'adicionar';
    } if (ev.detail.value === 'amigos') {
      this.valueSelected = 'amigos';
    }

  }
}