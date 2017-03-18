import {ErrorHandler, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./components/pages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import * as pageComponents from "./components/pages";
import * as singletons from "./services/singleton";
import {routes} from "./routing/routes";
import {vendorImports} from "./vendors/angular-vendors";
import {vendorComponents} from "./vendors/angular-vendors";

const mapImports = (obj: Object) => Object.keys(obj).map(key => obj[key]);

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routes,
        ...vendorImports
    ],
    providers: [
        ...mapImports(singletons)
    ],
    declarations: [
        ...mapImports(pageComponents),
        ...vendorComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}