import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "../components/pages/app/app.component";
import {SignInPage} from "../components/pages/index";

export const routes: ModuleWithProviders = RouterModule.forRoot(
    [
        {
            path: 'sign-in',
            component: SignInPage,
        },
        {
            path: '**',
            redirectTo: 'sign-in'
        }
    ]);