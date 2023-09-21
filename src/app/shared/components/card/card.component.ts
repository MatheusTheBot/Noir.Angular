import { Component, Input } from '@angular/core';
import { Data } from '../../models/Data.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() mode: string = 'tableMode';
  @Input() title: string = '';
  @Input() useModal: boolean = true;

  @Input() allData: Data<any>[] = [];

  modalTitle: string = 'Modal';
  modalContent: Data<any> = this.allData[0];

  handleClickModal(title: string, content: Data<any>) {
    this.modalTitle = title;
    this.modalContent = content;
  }
}
