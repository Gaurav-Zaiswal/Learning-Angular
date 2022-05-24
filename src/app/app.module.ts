import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingAndInterpolationComponent } from './day2/binding-and-interpolation/binding-and-interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingAndInterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
