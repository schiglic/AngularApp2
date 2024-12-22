import { Component } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],  // Ось тут головне!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [
    { title: 'Task 1', deadline: '2024-12-31', priority: 'High' },
    { title: 'Task 2', deadline: '2024-12-25', priority: 'Medium' }
  ];
  
  newTask = { title: '', deadline: '', priority: 'Medium' };

  addTask() {
    if (this.newTask.title && this.newTask.deadline) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', deadline: '', priority: 'Medium' };
    }
  }

  removeTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
