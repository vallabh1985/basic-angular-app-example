import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {BlogserviceService} from '../blogservice.service';
import {ActivatedRoute,Router} from '@angular/router'


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  id=this.activeRouter.snapshot.params.id;
  categories:any;
  alert:boolean=false;

  editBlogForm= new FormGroup({
    title: new FormControl('',[Validators.required,Validators.pattern(`[a-zA-z ]*`)]),
    body: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    category: new FormControl('')
  });

  constructor(private route:Router,private activeRouter:ActivatedRoute,private blog:BlogserviceService) { }

  ngOnInit(): void {
    this.blog.getCategoties().subscribe((data)=>{
      this.categories=data;
    });

    this.blog.getPostById(this.id).subscribe((data)=>{
        this.editBlogForm= new FormGroup({
          title: new FormControl(data['title']),
          body: new FormControl(data['body']),
          author: new FormControl(data['author']),
          category: new FormControl(data['category'])
        });
    });
    
  }

  get titleError(){return this.editBlogForm.get('title');}

  updateData(){
    this.blog.updatePost(this.id,this.editBlogForm.value).subscribe(()=>{
      console.log("updated succesfully");
      this.alert=true;
      this.route.navigate(['']);
    });
  }

  closeAlert(){
    this.alert=false;
  }


}
