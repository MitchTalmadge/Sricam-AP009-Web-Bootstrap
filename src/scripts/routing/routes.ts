import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "../components/pages/app/app.component";

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: AppComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
]);