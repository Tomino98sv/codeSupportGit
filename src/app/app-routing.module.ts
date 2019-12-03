import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageModuleModule } from './../module/welcome-page-module/welcome-page-module.module';

const routes: Routes = [
  { path: 'welcome', loadChildren: () => import('../module/welcome-page-module/welcome-page-module.module').then( module => module.WelcomePageModuleModule)},
  { path: '**', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
