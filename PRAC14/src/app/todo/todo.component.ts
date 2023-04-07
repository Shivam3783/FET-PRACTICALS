import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  tasks = [
    { description: 'Buy groceries', done: false },
    { description: 'Do laundry', done: true },
    { description: 'Clean the house', done: false }
  ];

  newTaskDescription = '';

  addTask() {
    const newTask = {
      description: this.newTaskDescription,
      done: false
    };
    this.tasks.push(newTask);
    this.newTaskDescription = '';
  }

  markTaskDone(task: any) {
    task.done = !task.done;
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }


  // constructor(private route: ActivatedRoute, private router: Router) {}


}
