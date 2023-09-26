import { Component } from '@angular/core';
import { NavbarItem } from 'src/app/components/models/navbarItem.models';
import { ParcelType } from 'src/app/core/enums/parcelType.enums';
import { Parcel } from 'src/app/core/models/Parcel.models';
import { Resident } from 'src/app/core/models/Resident.models';
import { Staff } from 'src/app/core/models/Staff.models';
import { Visitant } from 'src/app/core/models/Visitant.models';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  links: NavbarItem[] = [
    {
      header: 'Residents',
      url: 'resident',
    },
    {
      header: 'Visitants',
      url: 'visitant',
    },
    {
      header: 'Parcels',
      url: 'parcels',
    },
    {
      header: 'Staff',
      url: 'staff',
    },
  ];

  headers: string[] = [
    'Id',
    'Type',
    'Description',
    'From',
    'For',
    'Arrived Date',
  ];

  cards: Parcel[] | Resident[] | Visitant[] | Staff[] = [
    {
      id: 12,
      type: ParcelType.Medium,
      description: 'Test description1',
      from: 'test from1',
      for: 'test for1',
      arrivedDate: new Date(),
    },
    {
      id: 12,
      type: ParcelType.Medium,
      description: 'Test description2',
      from: 'test from2',
      for: 'test for2',
      arrivedDate: new Date(),
    },
    {
      id: 12,
      type: ParcelType.Medium,
      description: 'Test description3',
      from: 'test from3',
      for: 'test for3',
      arrivedDate: new Date(),
    },
    {
      id: 12,
      type: ParcelType.Medium,
      description: 'Test description4',
      from: 'test from4',
      for: 'test for4',
      arrivedDate: new Date(),
    },
  ];

  title = 'Test Title';
}
