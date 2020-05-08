import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  url="http://localhost:3000/posts";
  catUrl="http://localhost:3000/categories";

  constructor(private http:HttpClient) { }

  getCategoties()
  {
    return this.http.get(this.catUrl);
  }

  getBlogList() 
  {
    return this.http.get(this.url);
  }

  addBlog(data:any) 
  {
    return this.http.post(this.url,data);
  }

  deletePost(id:any){
    return this.http.delete(this.url+ "/" +id);
  }

  getPostById(id:any){
    return this.http.get(this.url+ "/" +id);
  }

  updatePost(id:any,data:any){
    return this.http.put(this.url+ "/" +id,data);
  }

}
