import { Component, OnInit } from '@angular/core';
import { GetCoinsService } from 'src/app/services/get-coins.service';
import { CoinModel } from 'src/app/models/cion.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coins: CoinModel;
  constructor(private getCoinsService: GetCoinsService) { 
    
  }


  ngOnInit(): void {
    this.getcoins('https://api.coingecko.com/api/v3/coins/list');
  }
  getcoins(call: string): void {
    this.getCoinsService.get(call).subscribe((coinsData: CoinModel) => {
      this.coins = coinsData;
    })
  }
}
