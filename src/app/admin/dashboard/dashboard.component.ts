import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Parcels } from 'src/app/core/models/ParcelModel';
import { Data } from 'src/app/shared/models/Data.models';
import { DataHeader } from 'src/app/shared/models/dataHeader.models';
import { NavbarItem } from 'src/app/shared/models/navbarItem.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  navItens: NavbarItem[] = [
    { label: 'Residents', url: 'user/residents' },
    { label: 'Visitants', url: 'user/vistants' },
    { label: 'Parcels', url: 'user/parcels' },
    { label: 'Aparts', url: 'user/aparts' },
    { label: 'Staff', url: 'user/staff' },
  ];

  parcelsHeader: DataHeader = {
    keys: ['type', 'arriveDate', 'forWho', 'description'],
    titles: ['type', 'arrived date', 'for who?', 'description'],
  };

  parcels: Data<Parcels>[] = [
    {
      title: 'Parcels',
      headers: this.parcelsHeader,
      content: [
        {
          type: 'teste',
          arriveDate: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
          forWho: 'teste for who',
          description: 'teste description',
        },
        {
          type: 'teste1',
          arriveDate: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
          forWho: 'teste for who1',
          description: 'teste description1',
        },
        {
          type: 'teste2',
          arriveDate: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
          forWho: 'teste for who2',
          description: 'teste description2',
        },
        {
          type: 'teste3',
          arriveDate: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
          forWho: 'teste for who3',
          description: 'teste description3',
        },
      ],
    },
  ];
}
