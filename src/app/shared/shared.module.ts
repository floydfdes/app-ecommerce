import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './components/layout/header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatIconModule, AppRoutingModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
