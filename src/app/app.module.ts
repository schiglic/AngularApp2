import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Додано для роботи з HTTP-запитами
import { MatCardModule } from '@angular/material/card'; // Додано для Angular Material Card
import { AppComponent } from './app.component'; // Ваш основний компонент

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,     // Для двостороннього зв'язку через ngModel
    CommonModule,    // Для використання *ngFor та *ngIf
    HttpClientModule, // Для виконання HTTP-запитів
    MatCardModule,    // Angular Material Card Module
  ],
  providers: [],
  bootstrap: [AppComponent] // Основний компонент для запуску програми
})
export class AppModule {}
