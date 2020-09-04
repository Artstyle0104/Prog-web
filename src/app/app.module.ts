import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FcomponentComponent } from './fcomponent/fcomponent.component';
import { ScomponentComponent } from './scomponent/scomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FcomponentComponent,
    ScomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
