import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FeatureComponent } from './components/feature/feature.component';
import { ProductdisplayComponent } from './components/productdisplay/productdisplay.component';
import { Banner2Component } from './components/banner2/banner2.component';
import { CollectionComponent } from './components/collection/collection.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    FeatureComponent,
    ProductdisplayComponent,
    Banner2Component,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
