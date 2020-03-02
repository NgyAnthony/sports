import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SportsComponent } from './components/sports/sports.component';
import { AppRoutingModule } from './app-routing.module';
import { SportDetailComponent } from './components/sport-detail/sport-detail.component';
import { SafePipe } from './safe.pipe';
import { WordwrapPipe } from './wordwrap.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    SportDetailComponent,
    SafePipe,
    WordwrapPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
