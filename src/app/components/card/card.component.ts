import { Component, Input, OnInit } from '@angular/core';
import { Parcel } from 'src/app/core/models/Parcel.models';
import { Visitant } from 'src/app/core/models/Visitant.models';
import { Resident } from 'src/app/core/models/Resident.models';
import { Staff } from 'src/app/core/models/Staff.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title: string = '';
  @Input() data: (Parcel | Visitant | Resident | Staff)[] = [];

  headers: string[] = [];

  //this creates Headers for the table using the obj.keys
  ngOnInit(): void {
    const firstItem = this.data[0];

    // Use Object.keys to get the keys of the first object in data
    const keys = Object.keys(firstItem);

    // Iterate over the keys and format them as headers
    keys.forEach((key) => {
      const regexPattern = /([a-z])([A-Z])/g;
      const response = key.replace(regexPattern, '$1 $2');
      this.headers.push(response.charAt(0).toUpperCase() + response.slice(1));
    });
  }

  dateFormat(date: any): string {
    date = date as Date;

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month} ${hours}:${minutes}`;
  }
}
