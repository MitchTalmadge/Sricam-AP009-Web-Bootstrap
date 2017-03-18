/*
 * Copyright (C) 2016 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiBook, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'web-animations-js/web-animations.min.js';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = 5;
    require('zone.js/dist/long-stack-trace-zone');
}
