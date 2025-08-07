import { Component, inject } from '@angular/core';
import { TaskService } from '../task-service';
import { TaskItem } from "../task-item/task-item";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TaskItem, RouterOutlet, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

taskService = inject(TaskService);
tasks = this.taskService.allTasks;



}
