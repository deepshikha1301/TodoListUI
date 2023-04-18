import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/Tasks';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(res => {
      res.forEach(t =>{
        let task:Task = new Task();
        task.id = t.id;
        task.reminder = t.reminder;
        task.taskName = t.taskName;
        task.taskTime = t.taskTime;
        this.tasks.push(task);
      });});
  }

  onDeleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t) => t.id!==task.id));
  }

  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}
