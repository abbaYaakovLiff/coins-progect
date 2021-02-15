import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { CoinModel } from 'src/app/models/cion.model';


@Injectable({
  providedIn: 'root'
})
export class GetCoinsService {
  
  _coinsList: CoinModel[] = [];
  private coinsList: BehaviorSubject<CoinModel[]>;  
  constructor(private httpClient: HttpClient) { 
    this.coinsList=new BehaviorSubject<CoinModel[]>([]);
  }

  get(api:string): Observable<any> {
 
    return this.httpClient.get<any>(api);
      
}
createCoinList(coin: CoinModel): void {
  if (!this. _coinsList.find(_coinsList =>_coinsList.symbol === coin.symbol)) {
      this. _coinsList = [...this. _coinsList, coin];
      this. coinsList.next(this. _coinsList);
  }
}
getCoinList(): Observable<CoinModel[]> {
 
  return this.coinsList;
    
}
}
