/*
 * Copyright (C) 2016 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiBook, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {AppModule} from "./app.module";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);

