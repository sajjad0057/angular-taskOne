import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css'],
})

export class Modal2Component implements OnInit {
  closeResult!: string;

  constructor(private _title: Title, private _modalService: NgbModal) {}

  ngOnInit(): void {
    this._title.setTitle('dashboard-mpdal2');
  }

  openVerticallyCentered(content: any) {
    this._modalService.open(content, { centered: true });
  }
}
