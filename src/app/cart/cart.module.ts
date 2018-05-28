import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import { CartRoutingModule } from './cart-routing.module';
import { CartsComponent } from './carts/carts.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [CartsComponent]
})
export class CartModule { }
