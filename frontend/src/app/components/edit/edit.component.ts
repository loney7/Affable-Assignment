import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  todo: any = {};
  updateForm: FormGroup;
  username: String;
  backRoute: String;

  constructor(private todoService: TodoService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: '',
      order: '',
      severity: '',
      status: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.username = params.username;
      this.backRoute = '/list/'+this.username;
      this.todoService.getTodoById(this.id).subscribe(res => {
        this.todo = res;
        this.updateForm.get('title').setValue(this.todo.title);
        this.updateForm.get('description').setValue(this.todo.description);
        this.updateForm.get('order').setValue(this.todo.order);
        this.updateForm.get('severity').setValue(this.todo.severity);
        this.updateForm.get('status').setValue(this.todo.status);
      });
    });
  }

  updateTodo(title, description, order, severity, status) {
    this.todoService.updateTodo(this.id, title, description, order, severity, status).subscribe(() => {
      this.snackBar.open('Todo updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate([`/list/${this.username}`]);
    });
  }

}