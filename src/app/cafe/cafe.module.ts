import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeComponent],
  exports: [CafeComponent]
})
export class CafeModule { }
