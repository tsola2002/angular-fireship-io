import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  // the module is dynamically imported code in the module
  // angular doesnt bundle the code in this module
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
