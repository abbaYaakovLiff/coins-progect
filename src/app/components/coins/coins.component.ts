import { Component, Input, OnInit } from '@angular/core';

import { CoinModel } from 'src/app/models/cion.model';
import { CoinInfoModel } from 'src/app/models/coininfo.model';
import { GetInfoService } from 'src/app/services/get-info.service';
import { ModuleResolutionKind } from 'typescript';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  @Input() coin: CoinModel;
  coinInfo: CoinInfoModel;
  showMoreInfo: boolean;


  constructor(private getinfoservice: GetInfoService) {
    this.coinInfo = { id: null, image: null, usd: null, ils: null, eur: null, createDate: null };
    this.showMoreInfo = false;
  }


  ngOnInit(): void {
  }
  getInfo(coinId: string) {
    if (!this.showMoreInfo) {
      if (this.coinInfo.createDate + 120000 < Date.now() || coinId !== this.coinInfo.id) {
        this.getinfoservice.get(coinId).subscribe((coinsInfoData: any) => {
          this.coinInfo.id = coinId;
          this.coinInfo.image = coinsInfoData.image.small,
            this.coinInfo.usd = coinsInfoData.market_data.current_price.usd,
            this.coinInfo.ils = coinsInfoData.market_data.current_price.ils,
            this.coinInfo.eur = coinsInfoData.market_data.current_price.eur,
            this.coinInfo.createDate = Date.now();
        })

        this.showMoreInfo = true;

      }
      else {
        this.showMoreInfo = true;

      }
    }
    else {
      this.showMoreInfo = false

    }

  }

}