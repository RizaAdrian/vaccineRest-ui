import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { VaccineService} from "./services/vaccine.service";
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [VaccineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
