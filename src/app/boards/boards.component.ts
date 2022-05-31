import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
        }))
      ])
    ])
  ]
})
export class BoardsComponent implements OnInit {

  todos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }
   toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, {completed: !todo.completed})
   }

   onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
  }

 
  
}
