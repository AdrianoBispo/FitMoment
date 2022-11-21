import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.page.html',
  styleUrls: ['./intropage.page.scss'],

})

export class IntropagePage {

  slideOpts = {
    initialSlide: 0,
    speed: 1200,
  };

  constructor(private router: Router) { }

  pularIntro() {
    this.router.navigateByUrl('/login');
  }

}
