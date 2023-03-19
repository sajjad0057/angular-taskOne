import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.css']
})

export class Modal1Component implements OnInit {
  
  closeResult : string = '';

  constructor(private _title : Title,private _modalService: NgbModal){}

  ngOnInit(): void {
    this._title.setTitle('dashboard-modal1')
  }

  open(content:any) {
		this._modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
