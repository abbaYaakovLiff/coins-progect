import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coinInfoModel } from '../models/cion-info.model';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

 
  private coin_CACHE:coinInfoModel[] = [];

    private baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    private KEY = 'e06a2f3d21ca934dc5a82ff8ba8ec0d8';

    constructor(private httpClient: HttpClient) { }

    get(city: string): Observable<any> {
        const sideEffect = (r) => {
            this.coin_CACHE[city] = r;
            setTimeout(() => {
                delete this.coin_CACHE[city];
            }, 200 * 1000);
        };

        if (this.coin_CACHE[city]) {
            return of(this.coin_CACHE[city]);
        } else {
            return this.httpClient.get(`${this.baseUrl}?units=metric&q=${city}&appid=${this.KEY}`, {
                reportProgress: true
            })
                .pipe(tap(sideEffect));
        }
    }
}*/
  
}
