import {AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "./service/todo.service";
import {Todo} from "./models/todo";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public todos: Todo[] = [];
  public subscription: Subscription;

  public title: string;
  public complete: boolean;

  constructor(
    private todoService: TodoService
  ) {

  }

  ngOnInit() {
    this.subscription = this.todoService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    }, error => {
      this.todoService.handleError(error);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onAddTodo(): void {
    let todo = new Todo(this.title, this.complete);
    this.todoService.addTodo(todo).subscribe(res => {
      this.todos.push(res);
    }, err => {
      this.todoService.handleError(err);
    })
  }

}
