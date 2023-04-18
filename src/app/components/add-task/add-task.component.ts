import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '..//..//services/ui.service';
import { TaskService } from '../../services/task.service';
import { Task } from '../../model/Tasks';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask:EventEmitter<any> = new EventEmitter();

  showAddTask:boolean = false;
  subscription:Subscription;
  addTaskForm!:FormGroup;

  constructor(private uiService:UiService, private formBuilder:FormBuilder, private taskService:TaskService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      taskName:['',''],
      taskTime:['',''],
      reminder:['true','']
    });
  }

  onSubmit(){
   this.showAddTask = false;
   this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
   this.onAddTask.emit(this.addTaskForm);
  }

}
