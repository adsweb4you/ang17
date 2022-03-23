import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductComponent } from './product/product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetalsComponent } from './detals/detals.component';
const routes: Routes = [
  {
    path:"",
    component:WelcomeComponent
  },
  {
    path:"product",
    component:ProductComponent
  },

  {
    path:"product/:id",
    component:DetalsComponent
  },

  {
    path:"**",
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
