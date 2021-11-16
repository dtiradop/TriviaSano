import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule
  ],
  exports:[
    NavComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }