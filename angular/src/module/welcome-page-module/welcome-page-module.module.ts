import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageModuleRoutingModule } from './welcome-page-module-routing.module';
import { IntroducingCompComponent } from './introducing-comp/introducing-comp.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [IntroducingCompComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WelcomePageModuleRoutingModule
  ]
})
export class WelcomePageModuleModule { }
