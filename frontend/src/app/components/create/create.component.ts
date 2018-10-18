import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; 
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;
  userid;
  username;
  backRoute;

  constructor(private todoService: TodoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: '',
      order: '',
      severity: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userid = params.userid;
      this.username = params.username;
    });
    this.backRoute = '/list/'+this.username;
  }

  addTodo(title, description, order, severity, userid) {
    this.todoService.addTodo(title, description, order, severity, userid).subscribe(() => {
      this.router.navigate(['/list/'+this.username]);
    });
  }

}