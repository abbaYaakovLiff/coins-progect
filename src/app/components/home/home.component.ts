import { Component, OnInit } from '@angular/core';
import { GetCoinsService } from 'src/app/services/get-coins.service';
import { CoinModel } from 'src/app/models/cion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coins: CoinModel[] = [];
  
  constructor(private getCoinsService: GetCoinsService) { 
  
  }


  ngOnInit(): void {
    this.getcoins('https://api.coingecko.com/api/v3/coins');
  }
  getcoins(api: string): void {
    this.getCoinsService.get(api).subscribe((coinsData:any) => {
      for (let i = 0; i < 50; i++) {
        this.coins.push({symbol: coinsData[i].symbol,id:coinsData[i].id})}
      }
    )
  }
  search(coin:string):void {
     this.coins.filter(
      c => c.id ===coin);
  }
  
}
