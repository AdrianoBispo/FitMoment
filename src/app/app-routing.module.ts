import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'intropage',
    loadChildren: () => import('./inital-screens/intropage/intropage.module').then( m => m.IntropagePageModule)
  },

  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadChildren: () => import('./inital-screens/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'cadastro',
    loadChildren: () => import('./inital-screens/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/friends/chat/chat.module').then( m => m.ChatPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
