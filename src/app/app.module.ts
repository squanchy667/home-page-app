import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LittleMenuComponent } from './little-menu/little-menu.component';
import { MissionComponent } from './mission/mission.component';
import { ProcessComponent } from './process/process.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ApplicationComponent } from './application/application.component';
import { NewEmployeComponent } from './new-employe/new-employe.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LittleMenuComponent,
    MissionComponent,
    ProcessComponent,
    AttendanceComponent,
    ApplicationComponent,
    NewEmployeComponent,
    RightSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
