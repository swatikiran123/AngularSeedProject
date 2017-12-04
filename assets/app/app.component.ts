import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
	.author{
	display: inline-block;
	font-style: italic;
	font-size: 12px;
	width: 80%
	}
	.config{
	display: inline-block;
	text-align: right;
	font-size: 12px;
	width: 19%
}
`],
})
export class AppComponent {
messages: Message[]= [
new Message('A message 1','kiri')
new Message('A message 2','kiri')
new Message('A message 3','kiri')
]
}
