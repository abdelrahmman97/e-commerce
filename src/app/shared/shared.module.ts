import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
