import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service-post/service-post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  username: string = '';
  userPosts: any[] = [];
  selectedPost: any = null;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.loadUserPosts();
    });
  }

  loadUserPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.userPosts = posts.filter((post: { username: string; }) => post.username === this.username);
    });
  }

  showDetails(post: any): void {
    this.selectedPost = post;
  }

  closeDetails(): void {
    this.selectedPost = null;
  }
}
