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
  isValidImage : boolean = false;
  imageValidationMessage: string = '';
  isSetImage : boolean = false;
  isValidTitle : boolean = true;
  isValidBody : boolean = true;

  cardForm: ICardItems = {
    title: '',
    body: '',
    image: '',
  };

  cards: ICardItems[] = Cards;

  base64code!: string;

  constructor() {
    console.log('HomeComponent.ts fired !');
  }

  ngOnInit(): void {}

  onFileChange($event: Event) {

    this.isSetImage = true;
    this.imageValidationMessage = ""
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    console.log(`image size in bytes : ${file.size}`);

    let fileSize: number = file.size / 1024;

    console.log(`image size in kB : ${fileSize}`);

    let fileExt: string = file.name.split('.')[1];

    if (fileSize <= 200 && ['png', 'jpg'].includes(fileExt)) {
      this.isValidImage = true;
      console.log(this.imageValidationMessage);
      this.convertToBase64(file);
    } else {
      this.isValidImage = false;
      if (fileSize > 200) {
        this.imageValidationMessage +=
          'Image file size must be less then 200kB. ';
      }

      if (!['png', 'jpg'].includes(fileExt)) {
        this.imageValidationMessage += ' Image file type must be png or jpg !';
      }
      console.log(this.imageValidationMessage);
    }
  }

  submit() {

    if (this.isValidImage){
      this.cards.push(this.cardForm);
      this.cardForm = {
        title : '',
        body : '',
        image : ''
      }
    }
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((base64Code) => {
      this.cardForm.image = base64Code;
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
