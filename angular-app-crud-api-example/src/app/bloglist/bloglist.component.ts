import { Component, OnInit } from '@angular/core';
import {BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {
  blogList;
  constructor(private blog:BlogserviceService) { }

  ngOnInit(): void {
    this.blog.getBlogList().subscribe( (data) => {
      this.blogList=data;
    });
  }

  deletePost(id){
    if(confirm("Are you sure, you want to Delete ?")){
      this.blog.deletePost(id).subscribe((result)=>{
          console.log("Post deleted succeessfully");
        });
    }
    this.blogList.splice(id-1,1);
  }

}
