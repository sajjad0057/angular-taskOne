import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})
export class Modal1Component implements OnInit {
  
  constructor(private _title : Title){}

  ngOnInit(): void {
    this._title.setTitle('dashboard-mpdal1')
  }
  
}
