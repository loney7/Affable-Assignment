import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { TodoService } from '../../todo.service'; 
import { User } from '../../user.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeForm: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {
    this.homeForm = this.fb.group({
      username: ['', Validators.required]
    });
  }

  
  checkUser(username) {
    this.todoService
      .getUserByUsername(username) // we have user object
      .subscribe((data) => {
        if(data[0]) {
          this.router.navigate(['/list/'+username]);
        }
        else {
          this.snackBar.open('User does not exist', 'OK', {
            duration: 3000
          });
        }
      });
    
  }

  async createNewUser(username) {
    this.todoService
      .getUserByUsername(username) // we have user object
      .subscribe((data) => {
        if(!data[0]) {
          this.createUser(username);
        }
        else {
          this.snackBar.open('User already exists', 'OK', {
            duration: 3000
          });
        }
      });
  }

  async createUser(username) {
    await this.todoService.addUser(username).toPromise();
          this.router.navigate(['/list/'+username]);
  }

  ngOnInit() {
  }

}