import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],

})
export class MaterialModule { }
