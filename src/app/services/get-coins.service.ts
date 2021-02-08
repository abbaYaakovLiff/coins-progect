import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { CoinModel } from 'src/app/models/cion.model';


@Injectable({
  providedIn: 'root'
})
export class GetCoinsService {
  httpClient: any;

  constructor() { }
  get(aa:string): Observable<CoinModel> {
 
    return this.httpClient.get(aa);
      
}
}
