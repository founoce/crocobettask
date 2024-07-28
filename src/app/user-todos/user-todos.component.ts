import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent implements OnInit {
  username: string = '';
  userTodos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadUserTodos();
    });
  }

  loadUserTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.userTodos = todos.filter(todo => todo.username === this.username);
    });
  }
}
