import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Якщо AppComponent не standalone, залишаємо тут
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // ngModel
    CommonModule  // *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
