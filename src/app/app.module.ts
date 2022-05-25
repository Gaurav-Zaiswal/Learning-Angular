import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingAndInterpolationComponent } from './day2/binding-and-interpolation/binding-and-interpolation.component';
import { DataPassingBtwnCompsComponent } from './day3/data-passing-btwn-comps/data-passing-btwn-comps.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingAndInterpolationComponent,
    DataPassingBtwnCompsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
