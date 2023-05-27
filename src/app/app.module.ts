import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecksListComponent } from './components/decks/decks-list/decks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDeckComponent } from './components/decks/add-deck/add-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    DecksListComponent,
    AddDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
