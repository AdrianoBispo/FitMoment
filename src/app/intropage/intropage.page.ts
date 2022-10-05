import { Component } from '@angular/core';

@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.page.html',
  styleUrls: ['./intropage.page.scss'],
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        
        <ion-slide >
          <ion-img id="slide1" src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400"></ion-img>
          <h1>Bora Muleke</h1>
          <p>O lugar perfeito para encontrar profissionais para gestão de ginástica laboral</p>
          <ion-button>Pular</ion-button>
        </ion-slide>

        <ion-slide>
          <ion-img id="slide2" src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=400"></ion-img>
          <h1>Ai que delícia</h1>
          <p>O lugar perfeito para encontrar profissionais para gestão de ginástica laboral</p>
        </ion-slide>
        
        <ion-slide>
          <ion-img id="slide3" src="https://images.pexels.com/photos/4754008/pexels-photo-4754008.jpeg?auto=compress&cs=tinysrgb&w=400"></ion-img>
          <h1>Tô Morto</h1>
          <p>O lugar perfeito para encontrar profissionais para gestão de ginástica laboral</p>
          <ion-button routerLink="../login">Vamos Lá</ion-button>
        </ion-slide>
      
        </ion-slides>
    </ion-content>
  `
})

export class IntropagePage {
  slideOpts = {
    initialSlide: 0,
    speed: 500,
  
  };

  constructor() { }

  ngOnInit() {
  }

}
