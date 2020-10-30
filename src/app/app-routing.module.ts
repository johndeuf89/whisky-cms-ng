import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

const routes: Routes = [
  {path: "blog-posts",component: BlogpostListComponent},
  {path: "blog-posts/:id", component:BlogpostComponent} // localhost:4200/blog-post/az12d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
