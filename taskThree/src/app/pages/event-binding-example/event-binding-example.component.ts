import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

  handleName($event:Event):void{
    const target = $event.target as HTMLInputElement;
    this.name = target.value;
  }
}
