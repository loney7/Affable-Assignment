// Todo service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // Get user by username
  getUserByUsername(username) {
    return this.http.get(`${this.uri}/users/${username}`);
  }
  // Get todo by id
  getTodoById(id) {
    return this.http.get(`${this.uri}/todos/${id}`);
  }

  // Add a todo 
  addTodo(title, description, order, severity, userid) {
    const todo = {
      title: title,
      description: description,
      order: order,
      severity: severity,
      userid: userid
    };
    return this.http.post(`${this.uri}/addtodo`, todo);
  }
  // Update a todo
  updateTodo(id, title, description, order, severity, status) {
    const todo = {
      title: title,
      description: description,
      order: order,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/todos/update/${id}`, todo);
  }
  // Delete a todo
  deleteTodo(id, userid) {
    return this.http.get(`${this.uri}/todos/delete/${id}/${userid}`);
  }
  // Add a user
  addUser(username) {
    const user = {
      username: username
    };
    return this.http.post(`${this.uri}/users/add/`, user);
  }
}
