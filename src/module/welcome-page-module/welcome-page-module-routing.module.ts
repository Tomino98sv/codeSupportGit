import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroducingCompComponent } from './introducing-comp/introducing-comp.component';


const routes: Routes = [
  {path:'', component: IntroducingCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class WelcomePageModuleRoutingModule { }
