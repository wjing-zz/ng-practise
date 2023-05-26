import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './shared/component/toggle-switch/toggle-switch.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToggleSwitchComponent,
    HomeBannerComponent
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
