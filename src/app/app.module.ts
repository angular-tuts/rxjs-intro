import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { GoingReactiveComponent } from './components/going-reactive/going-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    OperatorsComponent,
    GoingReactiveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
