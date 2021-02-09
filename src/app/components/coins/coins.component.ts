import { Component, Input, OnInit } from '@angular/core';
import { CoinModel } from 'src/app/models/cion.model';
import {  GetInfoService } from 'src/app/services/get-info.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
@Input() coin :CoinModel;
  constructor(private getinfoservice:GetInfoService) { }

  ngOnInit(): void {
  }
  getInfo(coinId:string){
    this.getinfoservice.get().subscribe((coinsData:any) => {
     /* for (let i = 0; i < 50; i++) {
        this.coins.push({symbol: coinsData[i].symbol,id:coinsData[i].id})}*/
      }
    )
  }
}
