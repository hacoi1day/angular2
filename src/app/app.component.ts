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

  public todo: Todo = null;

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

  onEditTodo(todo: Todo): void {
    this.todo = {...todo};
  }

  onUpdateTodo(): void {
    this.todoService.updateTodo(this.todo).subscribe(res => {
      this.todo = null;
      let idx = this.getIndex(res.id);
      this.todos[idx] = res;
    }, err => {
      this.todoService.handleError(err);
    })
  }

  getIndex(id: number): number {
    let idx = 0;
    this.todos.forEach((item, index) => {
      if (item.id == id) {
        idx = index;
        return false;
      }
    });
    return idx;
  }

  onDeleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(res => {
      this.todos = this.todos.filter(item => item.id != id);
    }, err => {
      this.todoService.handleError(err);
    })
  }

}
