import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayersModel } from 'src/app/model/players.model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Output() playerEvent = new EventEmitter<{ playersModel: PlayersModel, remove: boolean }>();

  @Input() player: PlayersModel;

  icon: string;
  text: number;
  color: string;
  isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getPriceHistory(priceHistory: number[], priceNow: number) {
    if (priceHistory.length > 1 && priceHistory[priceHistory.length - 1] != priceNow) {
      const lastPrice = priceHistory[priceHistory.length - 2]
      this.icon = (priceNow - lastPrice) < 0 ? 'ph-fill ph-caret-down' : 'ph-fill ph-caret-up'
      this.text = (priceNow - lastPrice)
      this.color = (priceNow - lastPrice) < 0 ? "#bd0000" : "#2fbd00"
    } else if (priceHistory.length > 1 && priceHistory[priceHistory.length - 1] == priceNow) {
      this.icon = "ph ph-bold ph-equals"
      this.text = 0
      this.color = "#ffe600"
    } else {
      this.icon = undefined;
      this.text = undefined;
      this.color = undefined;
    }
  }

  onSelect() {
    if (this.isSelected) {
      this.isSelected = false;
      this.playerEvent.emit({ playersModel: this.player, remove: true });
    } else {
      this.isSelected = true;
      this.playerEvent.emit({ playersModel: this.player, remove: false });
    }
  }

}
