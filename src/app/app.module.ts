import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPvf-REeXnpop4KGV18XOk9bWati_r56Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
