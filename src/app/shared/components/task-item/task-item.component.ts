import { Component, Input } from '@angular/core';
import { TaskService } from 'src/app/tasks/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: false,
})
export class TaskItemComponent {
  @Input() task: any;

  constructor(private taskService: TaskService) {}

  deleteTask(taskId: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      this.taskService.deleteTask(taskId).then(() => {
        console.log('Tarea eliminada');
      }).catch(error => {
        console.error('Error al eliminar la tarea:', error);
      });
    }
  }
}
