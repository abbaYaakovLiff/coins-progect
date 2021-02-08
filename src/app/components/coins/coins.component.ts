import { Component, Input, OnInit } from '@angular/core';
import { CoinModel } from 'src/app/models/cion.model';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
@Input() coin :CoinModel;
  constructor() { }

  ngOnInit(): void {
  }

}
