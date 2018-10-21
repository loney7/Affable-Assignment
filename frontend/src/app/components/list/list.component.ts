import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Todo } from '../../todo.model';
import { User } from '../../user.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[];
  displayedColumns = ['title', 'description', 'order', 'severity', 'status', 'actions'];
  username;
  user: User
  todoids: String[];
  numOfTasks;
  createRoute;
  userId;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.username = params.username;
  });
  
    this.fetchUserByUsername();
}

  fetchUserByUsername() {
    this.todos = [];
    this.todoService
      .getUserByUsername(this.username) // we have user object
      .subscribe((data: User) => {
        this.user = data;
        this.fetchTodosOfUser();
      });
  }

  fetchTodosOfUser() {
    this.todoids = this.user[0].tasks;
    this.numOfTasks = this.todoids.length;
    this.userId = this.user[0]._id;
    this.createRoute = '/create/'+this.userId+'/'+this.username;
    this.todoids.forEach(task => {
      this.todoService
      .getTodoById(task).subscribe(
        (data: Todo) => {this.todos.push(data)}
        );
    });
  }

  editTodo(id) {
    this.router.navigate([`/edit/${this.username}/${id}`]);
  }

  async deleteTodo(id) {
   await this.todoService.deleteTodo(id, this.userId)
    .toPromise();
    this.fetchUserByUsername();
  }

}