import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/Tasks';

const options = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/api/v1/tasks'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task):Observable<Task>{
    const url = this.apiUrl+'/'+task.id;
    return this.http.delete<Task>(url);
  }

  updateTask(task:Task):Observable<Task>{
    const url = this.apiUrl+'/'+task.id;
    return this.http.put<Task>(url, task, options);
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, options);
  }

}
