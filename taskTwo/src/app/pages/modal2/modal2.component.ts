import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
})
export class Modal2Component implements OnInit {
  
  constructor(private _title : Title){}

  ngOnInit(): void {
    this._title.setTitle('dashboard-mpdal2')
  }
  
}
