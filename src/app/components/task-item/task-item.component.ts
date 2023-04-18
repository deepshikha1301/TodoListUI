import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/Tasks';
import { faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!:Task;
  @Output() deleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggle:EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(task:Task){
    this.deleteTask.emit(task);
  }

  toggleReminder(task:Task){
    this.onToggle.emit(task);
  }

}
