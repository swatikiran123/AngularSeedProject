import {Routes,RouterModule} from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";

import { AuthenticationComponent } from "./auth/auth.component";

const APP_ROUTES: Routes = [
{path: '', redirectTo: '/messages', pathMatch: 'full'}
{path: 'messages', component: MessagesComponent}
{path: 'auth', component: AuthenticationComponent}
];


export const routing =RouterModule.forRoot(APP_ROUTES);