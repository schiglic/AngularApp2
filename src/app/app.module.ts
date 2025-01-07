import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Додано для роботи з HTTP-запитами
import { AppComponent } from './app.component'; // Ваш основний компонент

@NgModule({
  declarations: [], // Порожній, оскільки AppComponent є standalone
  imports: [
    BrowserModule,
    FormsModule,     // Для двостороннього зв'язку через ngModel
    CommonModule,    // Для використання *ngFor та *ngIf
    HttpClientModule // Для виконання HTTP-запитів
  ],
  providers: [],
  bootstrap: [AppComponent] // Основний компонент для запуску програми
})
export class AppModule {}
