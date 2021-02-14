import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CoinModel } from 'src/app/models/cion.model';


@Injectable({
  providedIn: 'root'
})
export class GetCoinsService {
  
  coinsList: CoinModel[] = [];
  constructor(private httpClient: HttpClient) { }

  get(api:string): Observable<any> {
 
    return this.httpClient.get<any>(api);
      
}
}
