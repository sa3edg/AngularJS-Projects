import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div><h1>Hello {{pageTitle}}</h1>
         <pm-apps></pm-apps>
    </div>
     `
})

export class AppComponent  { 
  pageTitle: string = 'PushLet';
}
