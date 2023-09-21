import { Component, Input } from '@angular/core';
import { Data } from '../../models/Data.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() mode: string = '';
  @Input() title: string = '';
  @Input() content: Data<any> = {
    title: '',
    headers: { titles: [''], keys: [''] },
  };

  show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
