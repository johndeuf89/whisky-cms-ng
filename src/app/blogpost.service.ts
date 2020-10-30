import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogpost } from './models/blogpost';



@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  baseUrl =  'http://192.168.1.37:3000/api/v1/blog-posts';

  constructor(private httpClient: HttpClient) {}

    getBlogPost():Observable<Blogpost[]>{
      return this.httpClient.get<Blogpost[]>(`${this.baseUrl}`);
   }

   getBlogPostById(id):Observable<Blogpost>{
     return this.httpClient.get<Blogpost>(`${this.baseUrl}/${id}`);
   }
}
