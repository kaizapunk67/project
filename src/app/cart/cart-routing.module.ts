import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartsComponent} from './carts/carts.component'
 
const routes: Routes = [
  {
    path:'',component:CartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
