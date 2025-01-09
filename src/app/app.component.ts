import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; // Імпорт Angular Material Card

interface Task {
  title: string;
  deadline: string;
  priority: string;
}

interface LoadedTask {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule], // Додано MatCardModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [
    { title: 'Task 1', deadline: '2024-12-31', priority: 'High' },
    { title: 'Task 2', deadline: '2024-12-25', priority: 'Medium' }
  ];

  newTask: Task = { title: '', deadline: '', priority: 'Medium' };
  loadedTasks: LoadedTask[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  longText = `Простий додаток для керування завданнями. 
  Додавайте свої задачі та переглядайте 
  демонстраційні приклади з dummyjson.com.`; // Текст для картки

  constructor() {
    this.fetchTasks();
  }

  addTask() {
    if (this.newTask.title && this.newTask.deadline) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', deadline: '', priority: 'Medium' };
    }
  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  fetchTasks() {
    this.isLoading = true;
    this.error = null;
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => {
        this.loadedTasks = data.todos;
        console.log('Завантажені задачі:', this.loadedTasks);
      })
      .catch(err => this.error = `Помилка завантаження задач: ${err.message}` )
      .finally(() => this.isLoading = false);
  }
}
