import { Component, OnInit } from '@angular/core';
import { CoinModel } from 'src/app/models/cion.model';
import { GetCoinsService } from 'src/app/services/get-coins.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  coin: CoinModel;
  coinlist: CoinModel[];
  no = false;
  constructor(private getCoinsService: GetCoinsService) {
    this.coin = { symbol: undefined, id: undefined };

  }

  ngOnInit(): void {
    const newLocal = this.getCoinsService.getCoinList().subscribe((coinsData: any) => {
      this.coinlist = coinsData;
    });

  }
  getcoin(cionName: string): void {
    

  if (this.coinlist.find(find => find.symbol == cionName)) {
      this.coin = this.coinlist.find(find => find.symbol == cionName)
      this.no = false
    }
    else if(!cionName){
      this.no = false;
      this.coin.symbol = null;
    }

   else {
      this.no = true;
      this.coin.symbol = null;
    }
  }
}
