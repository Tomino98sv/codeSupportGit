import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';
import { AuthState } from 'src/shared/auth.state';

const states = [AuthState];

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot(states , {
      developmentMode: !environment.production,
      selectorOptions: {
      suppressErrors: false,
      injectContainerState: false
      }
      }),
      NgxsLoggerPluginModule.forRoot(),
      NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [NgxsModule, NgxsLoggerPluginModule, NgxsReduxDevtoolsPluginModule]
})
export class AppNgxsModule { }
