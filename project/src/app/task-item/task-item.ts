import { Component,input, inject } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task-service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NewTask } from '../new-task/new-task';


@Component({
  selector: 'app-task-item',
  imports: [DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  // formEdid =inject(NewTask);
  constructor(private router: Router) {}
  private taskService = inject(TaskService); 
  task = input.required<Task>();

  onDelete(id: string) {
  this.taskService.deleteTask(id);
}

onEdit(id: string) {
  const task = this.taskService.getTaskById(id);

 
  if (task) {
    this.taskService.setTaskToEdit(task);
   
    this.router.navigate(['/tasks/edit', id]); // Navigate with ID
 
  }


}
}