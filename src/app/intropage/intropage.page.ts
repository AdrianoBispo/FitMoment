import { Component } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
