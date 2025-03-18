import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./pages/task/task.module').then(m => m.TaskPageModule)
  },
  {
    path: 'tasks-list',
    loadChildren: () => import('./pages/tasks-list/tasks-list.module').then(m => m.TasksListPageModule)
  },
  {
    path: 'tasks-create',
    loadChildren: () => import('./pages/tasks-create/tasks-create.module').then(m => m.TasksCreatePageModule)
  },
  {
    path: 'task-update/:id', // ✅ Se agregó ":id" para recibir el identificador de la tarea
    loadChildren: () => import('./pages/task-update/task-update.module').then(m => m.TaskUpdatePageModule)
  },
  {
    path: '',
    redirectTo: 'tasks-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
