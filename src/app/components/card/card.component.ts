import { Component, Input, OnInit } from '@angular/core';
import { Parcel } from 'src/app/core/models/Parcel.models';
import { Visitant } from 'src/app/core/models/Visitant.models';
import { Resident } from 'src/app/core/models/Resident.models';
import { Staff } from 'src/app/core/models/Staff.models';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(public modal: ModalService) {}

  @Input() title: string = '';
  @Input() data: (Parcel | Visitant | Resident | Staff)[] = [];
  @Input() ommit: string[] = [];

  //here we have the data.key and the header to show
  headers: Map<string, string> = new Map<string, string>();

  modalData: Parcel | Visitant | Resident | Staff | null = null;
  modalDataTitle: string = '';

  filteredHeaders: string[] = [];

  //this creates Headers for the table using the data.keys
  ngOnInit(): void {
    const firstItem = this.data[0];
    let keys = Object.keys(firstItem);

    this.filteredHeaders = keys.filter((key) => !this.ommit.includes(key));

    // Iterate over the keys and format them as headers
    this.filteredHeaders.forEach((key) => {
      const regexPattern = /([a-z])([A-Z])/g;
      const response = key.replace(regexPattern, '$1 $2');
      this.headers.set(
        key,
        response.charAt(0).toUpperCase() + response.slice(1)
      );
    });

    this.modalDataTitle == typeof this.modalData;
    console.log(this.modalDataTitle);
  }

  handleModalClick(data?: Parcel | Visitant | Resident | Staff) {
    if (data == null || data == undefined) {
      this.modal.closeModal();
    } else {
      this.modalData = data;
      this.modal.openModal();
    }
  }
  closeModalFromModal() {
    this.modal.closeModal();
  }
}
