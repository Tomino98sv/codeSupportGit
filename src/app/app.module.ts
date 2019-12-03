import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AppNgxsModule } from './app-ngxs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    AppNgxsModule,   //css provided by Bootstrap
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
