import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { HeaderComponent } from './page404/header/header.component';
import { BodyComponent } from './page404/body/body.component';
import { FooterComponent } from './page404/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
