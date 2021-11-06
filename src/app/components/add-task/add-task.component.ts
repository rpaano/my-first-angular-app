import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle()
      .subscribe(
        value => this.showAddTask = value
      );
   }

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
