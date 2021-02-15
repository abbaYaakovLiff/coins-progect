import { Component, OnInit } from '@angular/core';
import { GetCoinsService } from 'src/app/services/get-coins.service';
import { CoinModel } from 'src/app/models/cion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  url:string='https://api.coingecko.com/api/v3/coins';
  constructor(private getCoinsService: GetCoinsService) {}


  coinlist: CoinModel[];
  ngOnInit(): void {
    this.getcoins(this.url);
    this.getCoinsService.getCoinList().subscribe((coinsData:any) => {
      this.coinlist=coinsData;

    })
  }
  getcoins(api: string): void {
    this.getCoinsService.get(api).subscribe((coinsData:any) => {
      for (let i = 0; i < 50; i++) {
        this.getCoinsService.createCoinList({symbol: coinsData[i].symbol,id:coinsData[i].id})}
      }
    )
  }
  
  
}
