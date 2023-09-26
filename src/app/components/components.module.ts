import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent, ModalComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, CardComponent, ModalComponent],
})
export class ComponentsModule {}
