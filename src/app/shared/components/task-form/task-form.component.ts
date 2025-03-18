import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/tasks/models/task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  standalone: false,
})
export class TaskFormComponent {
  @Input() task!: Task;
  @Input() buttonText: string = 'Guardar';
  @Output() onSave = new EventEmitter<Task>();
 /**
  *
  */
 constructor(private router: Router) {
  }
  goBack() {
    this.router.navigate(['/tasks-list']);



 }
  saveTask() {
    this.onSave.emit(this.task);
  }
}
