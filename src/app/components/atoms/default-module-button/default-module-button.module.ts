import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultModuleButtonComponent } from './default-module-button.component';

@NgModule({
  declarations: [
    DefaultModuleButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DefaultModuleButtonComponent
  ]
})
export class DefaultModuleButtonModule { }