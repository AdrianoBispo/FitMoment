import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  valueSelected: any;

  public data = ['Adrielly', 'Alex', 'Alicia', 'Biel', 'Breno', 'Bruno'];

  public results = [...this.data];

  constructor(private router: Router) { }

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

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  chat() {
    this.router.navigateByUrl('/chat');
  }

}
