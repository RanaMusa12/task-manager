import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task-service'
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
 import { ActivatedRoute } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-new-task',
  imports: [ReactiveFormsModule,  RouterLink, RouterOutlet],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask implements OnInit {
//  
 isEditMode = false;
editedTaskId: string | null = null;

 constructor(private route: ActivatedRoute, private taskService2: TaskService, private router:Router) {}
  taskService = inject(TaskService);
  tasks = this.taskService.allTasks();
  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.isEditMode = true;
    this.editedTaskId = id
    const task = this.taskService2.getTaskToEdit(); // Get from service
    if (task) {
      this.form.patchValue({
        inputTitle: task.title,
        inputDescription: task.description,
        inputDate: task.date.toISOString().split('T')[0] // format for input[type=date]

      });

          const addbutton = document.querySelector('#addButton');
        if (addbutton) {
          addbutton.textContent = 'Save'; 
        }
    }
  }



}

  form = new FormGroup({
    inputTitle : new FormControl('',{
      validators : [Validators.required]
    }),
    inputDescription : new FormControl('',{
      validators: [Validators.required]
    }),
    inputDate : new FormControl('',{
      validators: [Validators.required]
    })
});
 

onSubmit(){
  
  const message = document.querySelector("#message");

  if(this.form.invalid){

    message!.innerHTML = `
    <p>fill all fields</p>
  `;
   message!.classList.remove("hidden");
   message?.classList.add('message');

  setTimeout(() => {
  message?.classList.add('hidden');
}, 2000);

    return;
  }
 
  const title  = this.form.value.inputTitle!;
  const inputDate  =  this.form.value.inputDate ?? '';
  const date = new Date (inputDate);
  const description = this.form.value.inputDescription!;

   
  // console.log(title , date , description);
    if (this.isEditMode && this.editedTaskId) {
    this.taskService.updateTask(this.editedTaskId, {
      id: this.editedTaskId,
      title,
      description,
      date
    });
  } else {
    this.taskService.onAdd(title, description, date);
  }

  // this.taskService.onAdd(title, description, date);
  console.log(title , date , description);
  this.form.reset();

  
  message!.innerHTML = `
    <p>task added successfuly</p>
  `;
  message!.classList.remove("hidden");
  message?.classList.add('message');

  setTimeout(() => {
  message?.classList.add('hidden');
}, 2000);

this.router.navigate(['/tasks/all']);





   
}

}
