import { Component, Input } from '@angular/core';
import { Parcel } from 'src/app/core/models/Parcel.models';
import { Resident } from 'src/app/core/models/Resident.models';
import { Staff } from 'src/app/core/models/Staff.models';
import { Visitant } from 'src/app/core/models/Visitant.models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() data: Parcel | Resident | Staff | Visitant | null = null;
  @Input() title: string = '';
}
