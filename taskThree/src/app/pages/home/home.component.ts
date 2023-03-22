import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { CardService } from 'src/app/services/card.service';
import { ICardItems } from 'src/app/shared/types/ICardItems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @ViewChild('image') fileInput!: ElementRef;

  isValidImage: boolean = true;
  imageValidationMessage: string = '';
  isSetImage: boolean = false;
  isValidTitle: boolean = true;
  isValidDescription: boolean = true;

  cardForm: ICardItems = {
    title: '',
    subtitle:'',
    description: '',
    image: '',
  };

  cards!: ICardItems[];

  base64code!: string;

  constructor(private _cardService:CardService) {
    
  }

  ngOnInit(): void {

    
    this.cards = this._cardService.getCard()  
  }


  submit() : void {

    this.checkValidation();

    if ((this.isSetImage && this.isValidImage) && (this.isValidTitle && this.isValidDescription)) 
    {
      this._cardService.addCard(this.cardForm)
      this.cardForm = {
        title: '',
        subtitle:'',
        description: '',
        image: '',
      };
      this.isSetImage = false;
      const fileInputElement = this.fileInput.nativeElement;
      fileInputElement.value = '';
    }
  }

  checkValidation():void{

    if (this.cardForm.title.length >= 10 && this.cardForm.title.length <= 12) 
    {
      this.isValidTitle = true;
    } 
    else 
    {
      this.isValidTitle = false;
    }

    if (this.cardForm.description.length >= 50 && this.cardForm.description.length <= 1000)
    {
      this.isValidDescription = true;
    } 
    else 
    {
      this.isValidDescription = false;
    }
    if(!this.isSetImage){
      this.isValidImage = false;
      this.imageValidationMessage = "Image file is required !"
    }

  }

  onFileChange($event: Event) : void {
    this.isSetImage = true;
    this.imageValidationMessage = '';
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    let fileSize: number = file.size / 1024;

    let fileExt: string = file.name.split('.')[1];

    if (fileSize <= 200 && ['png', 'jpg'].includes(fileExt)) {
      this.isValidImage = true;
      this.convertToBase64(file);
    } 
    else {
      this.isValidImage = false;
      if (fileSize > 200) {
        this.imageValidationMessage +=
          'Image file size must be less then 200kB. ';
      }

      if (!['png', 'jpg'].includes(fileExt)) {
        this.imageValidationMessage += ' Image file type must be png or jpg !';
      }
    }
  }

  convertToBase64(file: File) : void {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((base64Code) => {
      this.cardForm.image = base64Code;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) : void {
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
