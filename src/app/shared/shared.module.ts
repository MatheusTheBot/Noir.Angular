import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [NavbarComponent, CardComponent, ModalComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, CardComponent, ModalComponent],
})
export class SharedModule {}
