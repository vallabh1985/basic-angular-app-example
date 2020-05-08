import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  categories:any;
  alert:boolean=false;

  constructor(private blog:BlogserviceService) { }

  ngOnInit(): void {
    this.blog.getCategoties().subscribe((data)=>{
      this.categories=data;
    });
  }

  addBlogForm= new FormGroup({
    title: new FormControl('',[Validators.required,Validators.pattern(`[a-zA-z ]*`)]),
    body: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    category: new FormControl('')
  });

  
  addData(){
    this.blog.addBlog(this.addBlogForm.value).subscribe((result)=>{
      this.alert=true;
      this.addBlogForm.reset({});
      console.log("result",result);
    });
  }

  closeAlert(){
    this.alert=false;
  }

  get titleError(){return this.addBlogForm.get('title');}

}
