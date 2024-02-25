import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LetterCardComponent } from './letter-card/letter-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FrontpageComponent,
    LetterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
