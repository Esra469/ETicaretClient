import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminModule } from './admin/admin-module';
import { UiModule } from './ui/ui-module';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Base } from './base/base';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [App],
})
export class AppModule {}
