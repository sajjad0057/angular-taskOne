import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { ICardItems } from 'src/app/shared/types/ICardItems';
import { Cards } from 'src/assets/data/Cards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  title = "home form"

  cardForm : ICardItems = {
    title : '',
    body : '',
    image : ''
  } 
  
  cards: ICardItems[] = Cards;

  base64code!: string;

  constructor() {
    console.log('HomeComponent.ts fired !');
  }

  ngOnInit(): void {}

  onFileChange($event:Event){
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    this.convertToBase64(file)   
}

  submit() {
    console.log(this.cardForm);
    this.cards.push(this.cardForm);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.cardForm.image = d;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
}
