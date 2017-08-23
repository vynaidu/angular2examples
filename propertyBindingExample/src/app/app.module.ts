import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SiteComponent}  from './site.component';
import {MsgComponent}   from './msg.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ SiteComponent, MsgComponent ],
  bootstrap:    [ SiteComponent ]
})
export class AppModule { }
