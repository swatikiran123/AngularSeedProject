import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";

import { MessageListComponent } from "./messages/Message-list.component";

import { MessageInputComponent } from "./messages/message-input.component";

import { MessagesComponent } from "./messages/messages.component";

import { AuthenticationComponent } from "./auth/auth.component";

import { HeaderComponent } from "./header.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}