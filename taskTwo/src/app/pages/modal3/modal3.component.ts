import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.css']
})

export class Modal3Component implements OnInit {

  constructor(private _title : Title,private _modalService: NgbModal){}

  ngOnInit(): void {
    this._title.setTitle('dashboard-modal3')
  }

  openLg(content:any) {
		this._modalService.open(content, { size: 'lg' });
	}
}
