import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FcomponentComponent } from './fcomponent/fcomponent.component';
import { ScomponentComponent } from './scomponent/scomponent.component';

const routes: Routes = [
  {
    path: "fcomponent",
    component: FcomponentComponent
  },
  {
    path:"scomponent",
    component: ScomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
