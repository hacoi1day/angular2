import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public API: string = 'https://5f982fd142706e0016958197.mockapi.io/todo';

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.API, todo);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log('Client-side error', err.error.message);
    } else {
      console.log('Server-side error', err.status);
    }
  }

}
