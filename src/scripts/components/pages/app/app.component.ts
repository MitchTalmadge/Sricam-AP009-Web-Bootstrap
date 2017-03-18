import {Component, ViewEncapsulation} from "@angular/core";
import Moment = moment.Moment;
import moment = require("moment");

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    constructor() {
        moment.updateLocale('en', {
            calendar: {
                lastDay: '[Yesterday at] LT',
                sameDay: '[Today at] LT',
                nextDay: '[Tomorrow at] LT',
                lastWeek: '[Last] dddd [at] LT',
                nextWeek: '[Next] dddd [at] LT',
                sameElse: 'dddd, MMMM Do, YYYY [at] LT'
            }
        });
    }


}