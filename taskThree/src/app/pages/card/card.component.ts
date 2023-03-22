import { Component, OnInit } from '@angular/core';
import { ICardItems } from 'src/app/shared/types/ICardItems';
import { Cards } from 'src/assets/data/Cards';


//import '../../../assets/data/text.json'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{
  
  cards : ICardItems[] = Cards;

  jsonData! : string;

  constructor(){}

  ngOnInit(): void {
    this.jsonData = JSON.stringify(this.cards);
    console.log(`json : ${this.jsonData}`);    
  }

  getCards():void{

  }

}
