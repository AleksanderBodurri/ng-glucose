import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { ColourDirective } from './colour.directive';

@NgModule({
  declarations: [AppComponent, ListItemComponent, ColourDirective],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
