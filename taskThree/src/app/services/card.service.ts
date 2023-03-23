import { Injectable } from '@angular/core';
import { Cards } from 'src/assets/data/Cards';
import { ICardItems } from '../shared/types/ICardItems';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCard():ICardItems[]{
    return Cards;
  }

  addCard(card : ICardItems):void{
    Cards.push(card)
  };
}
