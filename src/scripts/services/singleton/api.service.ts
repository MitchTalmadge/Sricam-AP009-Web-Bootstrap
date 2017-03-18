/*
 * Copyright (C) 2016 AptiTekk, LLC. (https://AptiTekk.com/) - All Rights Reserved
 * Unauthorized copying of any part of AptiBook, via any medium, is strictly prohibited.
 * Proprietary and confidential.
 */

import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HTTPService {

    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    constructor(private http: Http) {
    }

    private static checkForErrors(response: Response): any {
        if (response.status >= 200 && response.status < 300) {
            if (response.text().length > 0)
                return JSON.parse(response.text());
            return undefined;
        } else {
            let error = new Error(response.statusText);
            error['response'] = response;
            throw error;
        }
    }

    public get(path: string, additionalHeaders?: Headers): Observable<any> {
        let options;
        if (additionalHeaders) {
            let newHeaders: Headers = new Headers(this.headers);
            additionalHeaders.forEach((values: string[], name: string) => {
                values.forEach((value: string) => newHeaders.append(name, value));
            });
            options = new RequestOptions({headers: newHeaders});
        }
        else options = new RequestOptions({headers: this.headers});
        return this.http.get(path, options)
            .map(HTTPService.checkForErrors)
            .catch(e => Observable.throw(e.json().error));
    }

    public post(path: string, data: any): Observable<any> {
        let options = new RequestOptions({headers: this.headers});
        return this.http.post(path, JSON.stringify(data), options)
            .map(HTTPService.checkForErrors)
            .catch(e => Observable.throw(e.json().error));
    }

    public put(path: string, data: any): Observable<any> {
        let options = new RequestOptions({headers: this.headers});
        return this.http.put(path, JSON.stringify(data), options)
            .map(HTTPService.checkForErrors)
            .catch(e => Observable.throw(e.json().error));
    }

    public patch(path: string, data?: any): Observable<any> {
        let options = new RequestOptions({headers: this.headers});
        return this.http.patch(path, data != null ? JSON.stringify(data) : undefined, options)
            .map(HTTPService.checkForErrors)
            .catch(e => Observable.throw(e.json().error));
    }

    public del(path: string): Observable<any> {
        let options = new RequestOptions({headers: this.headers});
        return this.http.delete(path, options)
            .map(HTTPService.checkForErrors)
            .catch(e => Observable.throw(e.json().error));
    }

}