import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

   allTasks = signal<Task[]>([]);

  onAdd(title : string , description: string , date: Date){
    const task :Task = {
      title:title,
      description:description,
      date:date,
      id: Math.random().toString()
      
    };
    this.allTasks.update(allTasks => [...allTasks, task]);
      console.log(this.allTasks());
  }

  deleteTask(id: string) {
  this.allTasks.update(tasks => tasks.filter(task => task.id !== id));
}

  editTask(task :Task){

    

  }

  private taskToEdit?: Task;

  getTaskById(id: string): Task | undefined {
    return this.allTasks().find(t => t.id === id);
  }

  setTaskToEdit(task: Task) {
    this.taskToEdit = task;
  }

  getTaskToEdit(): Task | undefined {
    return this.taskToEdit;
  }

  updateTask(id: string, updatedTask: Task) {

    
  const index = this.allTasks().findIndex(t => t.id === id);
  if (index !== -1) {
    this.allTasks()[index] = updatedTask;
  }
}




  
  }
