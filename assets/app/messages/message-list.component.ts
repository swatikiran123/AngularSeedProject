import { Component} from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
selector: 'app-message-list',
templateUrl: `
<div class="col-md-8 col-md-offset-2">
<app-messages [message]="message"
(editclicked)="message.content= $event"
*ngFor="let message of messages">
</app-messages>
</div>`

})
export class MessageListComponent implements OnInit {

messages: Message[];

constructor(private messageService: MessageService){}

ngOnInit() {

this.messages = this.messageService.getMessages();

}
	
}