import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.css']
})
export class Modal3Component implements OnInit {

  constructor(private _title : Title){}

  ngOnInit(): void {
    this._title.setTitle('dashboard-mpdal3')
  }
}
