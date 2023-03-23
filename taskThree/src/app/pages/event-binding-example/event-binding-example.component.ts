import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.css']
})
export class EventBindingExampleComponent implements OnInit{

  name! : string;
  gender! : string;
  profession! : string;
  address! : string;
  isShowing : boolean = false;

  constructor(private _title : Title){}

  ngOnInit(): void {
    this._title.setTitle("TaskThree-EventBindingExample");
  }

  handleName($event:Event):void{
    const target = $event.target as HTMLInputElement;
    this.name = target.value;
  }
}
