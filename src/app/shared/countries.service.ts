import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
export class Countries {
    constructor(

        public name: string,
        public id: string,
        public population: number,
        public capital: string,
        public language: string,
        public currency: string,
    ) {

    }
}
@Injectable()
export class CountriesService {
    private url = 'http://localhost:2403/countries';
    constructor(private http: Http) {

    }
    getCountries(): Observable<Countries[]> {
        return this.http.get(this.url).pipe(map(response => {
            const res = response.json();
            return res;
        }));
    }
    getCountry(id: string): Observable<Countries> {
        return this.http.get(this.url).pipe(map((response: Response) => {
            return response.json().filter((item: Countries) => item.id === id);
        }));
    }
    deleteCountry(id: string): Observable<any> {
        return this.http.delete(this.url + '/' + id).pipe(map((response: Response) => {
            // console.log(response);
        }));
    }
    addCountry(country: Countries): Observable<any> {
        return this.http.post(this.url, country).pipe(delay(1000), map(response => {
            return response.json();
        }));
    }
    editCountry(country: Countries): Observable<any> {
        return this.http.put(this.url + '/' + country.id, country).pipe(delay(1000), map(res => {
            return res.json();
        }));
    }
}