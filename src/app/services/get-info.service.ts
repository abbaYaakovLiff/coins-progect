import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoinInfoModel } from '../models/coininfo.model';




@Injectable({
  providedIn: 'root'
})
export class GetInfoService {


  
  private baseUrl:string='https://api.coingecko.com/api/v3/coins/';


  constructor(private httpClient: HttpClient) { }

  get(coinId:string): Observable<any> {
 
    return this.httpClient.get<any>(`${this.baseUrl}${coinId}`);
      
  }
  
}
  

