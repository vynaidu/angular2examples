import {Component} from '@angular/core';
@Component({
    selector: 'site-app',
    templateUrl: 'app/site.component.html', 
    styleUrls: ['app/site.component.css']
})

export class SiteComponent {
    flag = true;
website = {
     name : 'ConcretePage',
     url : 'http://www.concretepage.com',
     logo : 'images/logo.jpg',
     description: 'Learn angular 2 property binding.'
}
} 