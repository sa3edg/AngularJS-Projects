import { Component, OnInit }  from '@angular/core';

@Component({
    selector: 'pm-apps',
    templateUrl: 'app/apps/app-list.component.html',
    styleUrls: ['app/apps/app-list.component.css']
})

export class AppListComponent{
    pageTitle: string = 'Application List';
    listFilter: string;
    errorMessage: string;
    apps: any[] =
    [
    {
        "id": 1,
        "name": "Leaf Rake",
    },
    {
        "id": 2,
        "name": "Garden Cart",
    }
    ];
}