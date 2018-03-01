import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingComponent } from './components/binding/binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
