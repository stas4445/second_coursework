import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateService } from '../shared/date.service';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  constructor(public dateService: DateService, private todoService: TodoService) { }

  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm) { 
    const todo = new Todo(form.value.title)
    this.todoService.addTodo(todo)
  }

}



