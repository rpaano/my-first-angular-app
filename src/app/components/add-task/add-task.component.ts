import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  task: string;
  dayTime: string;
  reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
     if(!this.task) {
       alert("Please add a task");
       return;
     }

     const newTask = {
      text:this.task,
      day:this.dayTime,
      reminder:this.reminder,
     }

     this.onAddTask.emit(newTask);

     this.task = "";
     this.dayTime = "";
     this.reminder = false;
  }
}
