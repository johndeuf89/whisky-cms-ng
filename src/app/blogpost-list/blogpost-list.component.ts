import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../models/blogpost';
import { Observable } from 'rxjs';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  blogPostList$:Observable<Blogpost[]>;
  
  constructor(private blogPostService:BlogpostService) { }

  ngOnInit(): void {
    this.blogPostList$ = this.blogPostService.getBlogPost();
  }

}

