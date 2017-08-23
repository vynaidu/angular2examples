import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ UserComponent, EmployeeComponent ],
  bootstrap:    [ UserComponent ]
})
export class AppModule { }
