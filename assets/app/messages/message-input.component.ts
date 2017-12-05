import { Component} from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';

@Component({
selector: 'app-message-input',
templateUrl: './message-input.component.html',
})
export class MessageInputComponent{

constructor(private messageService: MessageService){}

//onSubmit(value: string){
onSubmit(form: NgForm){
	//console.log(value);
	//const message = new Message(value,"kiri");
	const message = new Message(form.value.content,"kiri");

	this.messageService.addMessage(message);
	form.resetForm();
}
}