import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'TodoTracker';
  showAddTask:boolean = false;
  text:String = 'Add';
  constructor(private uiService:UiService) {
  this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toogleAddTask();
  }

}
