import {Component, Input} from '@angular/core';
@Component({
    selector: 'my-msg',
    templateUrl: 'app/msg.component.html' 
})
export class MsgComponent { 
	@Input() prefixMsg: string;
	@Input() siteName: string;
}