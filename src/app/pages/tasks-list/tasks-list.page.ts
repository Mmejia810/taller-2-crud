import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/tasks/services/task.service';
import { Task } from 'src/app/tasks/models/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.page.html',
  styleUrls: ['./tasks-list.page.scss'],
  standalone: false,
})
export class TasksListPage implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
}
