import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageModuleRoutingModule } from './welcome-page-module-routing.module';
import { IntroducingCompComponent } from './introducing-comp/introducing-comp.component';


@NgModule({
  declarations: [IntroducingCompComponent],
  imports: [
    CommonModule,
    WelcomePageModuleRoutingModule
  ]
})
export class WelcomePageModuleModule { }
