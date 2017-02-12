import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppListComponent }  from './apps/app-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent,
    AppListComponent ],
  bootstrap:    [ AppComponent, AppListComponent ]
})
export class AppModule { }
