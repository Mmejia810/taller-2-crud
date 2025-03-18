import { Component, Input } from '@angular/core';
import { Task } from 'src/app/tasks/models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  standalone: false,
})
export class TaskDetailsComponent {
  @Input() task!: Task;
}
