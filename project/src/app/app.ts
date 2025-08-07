import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { NewTask } from "./new-task/new-task";
import { TaskItem } from "./task-item/task-item";
import { Tasks } from "./tasks/tasks";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, NewTask, TaskItem, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
