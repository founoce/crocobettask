import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserTodosComponent } from './user-todos/user-todos.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'user-posts/:username', component: UserPostsComponent },
  { path: 'user-todos/:username', component: UserTodosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
