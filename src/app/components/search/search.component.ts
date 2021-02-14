import { Component, OnInit } from '@angular/core';
import { CoinModel } from 'src/app/models/cion.model';
import { GetCoinsService } from 'src/app/services/get-coins.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
coin:CoinModel;


  constructor(private getCoinsService: GetCoinsService) {
    this.coin={symbol:undefined,id:undefined};
    
  }

  ngOnInit(): void {
  }
  getcoin(cionName:string):void{
 
    this.coin.symbol = this.getCoinsService.coinsList.find(find => find.symbol == cionName ).symbol;
    this.coin.id = this.getCoinsService.coinsList.find(find => find.symbol == cionName ).id;
   
}
}
