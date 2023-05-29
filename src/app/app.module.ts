import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './shared/component/toggle-switch/toggle-switch.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { ScheduleBoardComponent } from './home/schedule-board/schedule-board.component';
import { ScheduleCountComponent } from './home/schedule-board/schedule-count/schedule-count.component';
import { ScheduleDetailsComponent } from './home/schedule-board/schedule-details/schedule-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToggleSwitchComponent,
    HomeBannerComponent,
    ScheduleBoardComponent,
    ScheduleCountComponent,
    ScheduleDetailsComponent
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
