import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BloglistComponent} from './bloglist/bloglist.component';
import {AddBlogComponent} from './add-blog/add-blog.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';


const routes: Routes = [
  {
    component:BloglistComponent,
    path:''
  },
  {
    component:AddBlogComponent,
    path:'add'
  },
  {
    component:EditBlogComponent,
    path:'edit/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
