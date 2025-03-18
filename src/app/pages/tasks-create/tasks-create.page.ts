import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/tasks/services/task.service';
import { Task } from 'src/app/tasks/models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.page.html',
  styleUrls: ['./tasks-create.page.scss'],
  standalone: false,
})
export class TasksCreatePage implements OnInit {
   tasks: Task[] = [];
    newTask: Task = { name: '', description: '', date: '' };
 // router: any;

    constructor(private taskService: TaskService, private router: Router) {}

    ngOnInit() {
      this.loadTasks();
    }

    // Cargar tareas desde Firebase
    loadTasks() {
      this.taskService.getTasks().subscribe(tasks => {
        this.tasks = tasks;
      });
    }

    // Agregar una nueva tarea
    addTask() {

      if (this.newTask.name && this.newTask.description && this.newTask.date) {
        this.taskService.addTask(this.newTask).then(() => {
          this.newTask = { name: '', description: '', date: '' };  // Limpiar formulario después de agregar
          this.loadTasks();
          this.router.navigate(['/tasks-list']); // Redirigir a task-list



          // Recargar tareas después de agregar una nueva
        });

      }
    }

    // Eliminar tarea
    deleteTask(id: string) {
      this.taskService.deleteTask(id).then(() => {
        this.loadTasks();  // Recargar tareas después de eliminar una
      });
    }
  }
