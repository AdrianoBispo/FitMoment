import { Component } from '@angular/core';

import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  constructor(private splashScreen: SplashScreen) {this.splashScreen.hide();}

}
