import { Routes } from '@angular/router';
import { Tasks } from './tasks/tasks';
import {NewTask} from './new-task/new-task'

export const routes: Routes = [

    {
        path: '',
        component:NewTask
    },

    {
        path: 'tasks/all',
        component:Tasks,
    },
    {
        path: 'tasks/new',
        component: NewTask,
    },
    {
        path: 'tasks/edit/:id',
        component: NewTask
    }
];
