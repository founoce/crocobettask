import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor() {}

  getUsers() {
    return axios.get(`${this.apiUrl}/users`);
  }

  getPosts() {
    return axios.get(`${this.apiUrl}/posts`);
  }
}
