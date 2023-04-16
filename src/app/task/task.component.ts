import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: String[] = ["Complete the project", "Read the book", "Buy wine"]
  setForm: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(checked:boolean){
    this.setForm = false;
  }
}
